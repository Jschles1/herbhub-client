import * as React from 'react';
import {
    Checkbox,
    createStyles,
    Card,
    Text,
    TextInput,
    LoadingOverlay,
} from '@mantine/core';
import { event } from 'nextjs-google-analytics';
import { useQueryParams } from '../../store';
import { CATEGORY_FILTERS } from '../../lib/constants';
import { debounce } from '../../lib/helpers';
import { useProductBrands } from '../../lib/hooks/useProductBrands';

const getCategoryFilterEventParams = (payload: {
    value: string;
    checked: boolean;
}) => {
    const { value, checked } = payload;
    const splitParams = value.split('/');
    let category: string;
    const label: string = splitParams[1];
    switch (splitParams[0]) {
        case 'str':
            category = 'Strain Type';
            break;
        case 'br':
            category = 'Brand';
            break;
        case 'type':
            category = 'Product Type';
            break;
        case 'loc':
            category = 'Dispensary';
            break;
        default:
            category = 'Unknown';
            break;
    }
    return {
        category,
        action: checked ? 'checked' : 'unchecked',
        label,
    };
};

const useStyles = createStyles((theme) => ({
    root: {
        overflow: 'unset',
    },
    label: {
        fontSize: '13px',
        cursor: 'pointer',
    },
    green: {
        color: theme.colors.green[5],
        fontWeight: 'bold',
    },
    input: {
        cursor: 'pointer',
        '&:checked': {
            backgroundColor: theme.colors.green[5],
            borderColor: theme.colors.green[5],
        },
    },
}));

const CategoryFilter = () => {
    const { classes, cx } = useStyles();
    const [params, dispatch] = useQueryParams();
    const checkboxRefs = React.useRef([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const {
        data: brandData,
        isLoading,
        isFetching,
    } = useProductBrands(searchQuery);
    const filterParams =
        !!params &&
        decodeURIComponent(params)
            .split('&')
            .find((param) => param.includes('filter'))
            ?.replace('filter=', '')
            .split(',');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const payload = { value: e.target.value, checked: e.target.checked };

        if (e.target.dataset && e.target.dataset.category === 'Dispensary') {
            const checkboxes = checkboxRefs.current as HTMLInputElement[];
            for (let i = 0; i < checkboxes.length; i++) {
                if (payload && checkboxes[i].value !== payload.value) {
                    checkboxes[i].checked = false;
                }
            }
        }

        dispatch({ type: 'filter', payload });

        event('CategoryFilter', getCategoryFilterEventParams(payload));
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.trim()) {
            setSearchQuery(value);
        } else {
            setSearchQuery('');
        }
    };

    React.useEffect(() => {
        checkboxRefs.current = checkboxRefs.current.slice(
            0,
            CATEGORY_FILTERS.length,
        );
    }, [brandData]);

    React.useEffect(() => {
        const uriParams = Object.fromEntries(
            new URLSearchParams(decodeURIComponent(params)),
        );
        if (!uriParams.filter) return;
        const filter = uriParams.filter;
        const selectedBrands = filter.split(',');
        const brandsShown: Record<string, boolean> = {};
        brandData.forEach((item: { value: string }) => {
            brandsShown[item.value] = true;
        });
        for (const brand of selectedBrands) {
            if (!brandsShown[brand]) {
                console.log('brand', brand);
                dispatch({
                    type: 'filter',
                    payload: { value: brand, checked: false },
                });
            }
        }
    }, [brandData, params, dispatch]);

    return (
        <Card withBorder radius="md" py="0" mr="1rem" className={classes.root}>
            {CATEGORY_FILTERS.map((category) => {
                const isBrand = category.name === 'Brand';
                const options = isBrand
                    ? (brandData as {
                          name: string;
                          value: string;
                      }[])
                    : category.options;
                const brandsLoading = isBrand && (isFetching || isLoading);
                return (
                    <React.Fragment key={category.name}>
                        <Card.Section inheritPadding py="xs">
                            <Text weight={500}>{category.name}</Text>
                        </Card.Section>

                        {isBrand && (
                            <Card.Section inheritPadding pb="xs">
                                <TextInput
                                    placeholder="Search Brands"
                                    onChange={debounce(handleSearchChange)}
                                />
                            </Card.Section>
                        )}

                        <Card.Section
                            inheritPadding
                            py="xs"
                            style={{ height: isBrand ? '425px' : 'auto' }}
                        >
                            {brandsLoading ? (
                                <div
                                    style={{
                                        position: 'relative',
                                        height: '425px',
                                    }}
                                >
                                    <LoadingOverlay
                                        visible={brandsLoading}
                                        loaderProps={{
                                            size: 'sm',
                                            color: 'green',
                                        }}
                                    />
                                </div>
                            ) : (
                                options.map((option, i) => {
                                    const checked = !!filterParams
                                        ? filterParams.includes(option.value)
                                        : false;
                                    return (
                                        <Checkbox
                                            ref={(el) =>
                                                category.name ===
                                                    'Dispensary' &&
                                                ((checkboxRefs as any).current[
                                                    i
                                                ] = el)
                                            }
                                            checked={checked}
                                            data-category={category.name}
                                            key={option.name}
                                            label={option.name}
                                            value={option.value}
                                            classNames={{
                                                label: cx(
                                                    classes.label,
                                                    checked && classes.green,
                                                ),
                                                input: classes.input,
                                            }}
                                            onChange={handleChange}
                                        />
                                    );
                                })
                            )}
                        </Card.Section>
                    </React.Fragment>
                );
            })}
        </Card>
    );
};

export default CategoryFilter;
