import * as React from 'react';
import {
    Checkbox,
    createStyles,
    Card,
    Text,
    TextInput,
    LoadingOverlay,
} from '@mantine/core';
import CategoryFilterLabel from '../molecules/CategoryFilterLabel';
import { event } from 'nextjs-google-analytics';
import { useQueryParams } from '../../store';
import { CATEGORY_FILTERS } from '../../lib/constants';
import { debounce } from '../../lib/helpers';
import { useProductBrands } from '../../lib/hooks/useProductBrands';
import { useProductDispensaries } from '../../lib/hooks/useProductDispensaries';
import { Dispensary } from '../../lib/interfaces';

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
        display: 'flex',
        alignItems: 'center',
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
    body: {
        display: 'flex',
        alignItems: 'center',
    },
    labelContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    checkboxRoot: {
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
    },
    scrollableSection: {
        '&::-webkit-scrollbar': {
            width: '8px',
        },
        '&::-webkit-scrollbar-track': {
            background: theme.colors.gray[1],
        },
        '&::-webkit-scrollbar-thumb': {
            background: theme.colors.gray[5],
            borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            background: theme.colors.gray[7],
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
    const {
        data: dispensaryData,
        isLoading: dispensaryLoading,
        isFetching: dispensaryFetching,
    } = useProductDispensaries();

    console.log({ dispensaryData });

    const filterParams =
        !!params &&
        decodeURIComponent(params)
            .split('&')
            .find((param) => param.includes('filter'))
            ?.replace('filter=', '')
            .split(',');

    // console.log({ filterParams });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const payload = { value: e.target.value, checked: e.target.checked };

        if (e.target.dataset && e.target.dataset.category === 'Dispensary') {
            const checkboxes = checkboxRefs.current as HTMLInputElement[];
            for (let i = 0; i < checkboxes.length; i++) {
                if (
                    payload &&
                    checkboxes[i].value !== payload.value &&
                    checkboxes[i].checked &&
                    checkboxes[i].dataset.category === 'Dispensary'
                ) {
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
    }, [brandData, dispensaryData]);

    // Reset brand filter on search
    React.useEffect(() => {
        const uriParams = Object.fromEntries(
            new URLSearchParams(decodeURIComponent(params)),
        );
        if (!uriParams.filter) return;
        const filter = uriParams.filter;
        const selectedBrands = filter
            .split(',')
            .filter((param) => param.startsWith('br'));
        const brandsShown: Record<string, boolean> = {};
        brandData.forEach((item: { value: string }) => {
            brandsShown[item.value] = true;
        });
        for (const brand of selectedBrands) {
            if (!brandsShown[brand]) {
                dispatch({
                    type: 'filter',
                    payload: { value: brand, checked: false },
                });
            }
        }
    }, [brandData, params, dispatch]);

    // Reset dispensary filter on menu type change
    React.useEffect(() => {
        const uriParams = Object.fromEntries(
            new URLSearchParams(decodeURIComponent(params)),
        );
        if (!uriParams.filter) return;
        const filter = uriParams.filter;
        const selectedDispensaries = filter
            .split(',')
            .filter((param) => param.startsWith('loc'));
        const dispensariesShown: Record<string, boolean> = {};
        if (Array.isArray(dispensaryData)) {
            dispensaryData.forEach((item: { id: string }) => {
                dispensariesShown[`loc/${item.id}`] = true;
            });
            for (const dispensary of selectedDispensaries) {
                if (!dispensariesShown[dispensary]) {
                    dispatch({
                        type: 'filter',
                        payload: { value: dispensary, checked: false },
                    });
                }
            }
        }
    }, [dispensaryData, params, dispatch]);

    return (
        <Card withBorder radius="md" py="0" mr="1rem" className={classes.root}>
            {CATEGORY_FILTERS.map((category) => {
                const isBrand = category.name === 'Brand';
                const isDispensary = category.name === 'Dispensary';
                const options = isBrand
                    ? (brandData as {
                          name: string;
                          value: string;
                      }[])
                    : isDispensary
                    ? Array.isArray(dispensaryData)
                        ? dispensaryData.map((item: Dispensary) => ({
                              name: `${item.name} - ${item.location}`,
                              value: `loc/${item.id}`,
                          }))
                        : ([] as {
                              name: string;
                              value: string;
                          }[])
                    : category.options;
                const brandsLoading = isBrand && (isFetching || isLoading);
                const dispensariesLoading =
                    isDispensary && (isFetching || dispensaryFetching);
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
                            className={classes.scrollableSection}
                            style={{
                                height: isBrand ? '445px' : 'auto',
                                maxHeight: isDispensary ? '600px' : 'auto',
                                minHeight: isDispensary ? '600px' : 'auto',
                                overflowY: isDispensary ? 'auto' : 'unset',
                                borderTop: isDispensary
                                    ? '1px solid #dee2e6'
                                    : 'unset',
                            }}
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
                            ) : dispensariesLoading ? (
                                <div
                                    style={{
                                        position: 'relative',
                                        height: '425px',
                                    }}
                                >
                                    <LoadingOverlay
                                        visible={dispensariesLoading}
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
                                                isDispensary &&
                                                ((checkboxRefs as any).current[
                                                    i
                                                ] = el)
                                            }
                                            checked={checked}
                                            data-category={category.name}
                                            key={option.name}
                                            label={
                                                <CategoryFilterLabel
                                                    name={option.name}
                                                    category={category.name}
                                                />
                                            }
                                            value={option.value}
                                            classNames={{
                                                label: cx(
                                                    classes.label,
                                                    checked && classes.green,
                                                ),
                                                input: classes.input,
                                                body: classes.body,
                                                root: classes.checkboxRoot,
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
