import * as React from 'react';
import { Checkbox, createStyles, Card, Text } from '@mantine/core';
import { useQueryParams } from '../../store';
import { CATEGORY_FILTERS } from '../../lib/constants';
import { useEffect } from 'react';

const useStyles = createStyles((theme) => ({
    root: {
        overflow: 'unset',
    },
    label: {
        fontSize: '13px',
        cursor: 'pointer',
    },
}));

const CategoryFilter = () => {
    const { classes } = useStyles();
    const [params, dispatch] = useQueryParams();
    const checkboxRefs = React.useRef([]);
    const filterParams =
        !!params &&
        decodeURIComponent(params)
            .split('&')
            .find((param) => param.includes('filter'))
            ?.replace('filter=', '')
            .split(',');

    const handleChange = (e: any) => {
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
    };

    useEffect(() => {
        checkboxRefs.current = checkboxRefs.current.slice(
            0,
            CATEGORY_FILTERS.length,
        );
    }, []);

    return (
        <Card withBorder radius="md" py="0" mr="1rem" className={classes.root}>
            {CATEGORY_FILTERS.map((category) => (
                <React.Fragment key={category.name}>
                    <Card.Section inheritPadding py="xs">
                        <Text weight={500}>{category.name}</Text>
                    </Card.Section>

                    <Card.Section inheritPadding py="xs">
                        {category.options.map((option, i) => {
                            const checked = !!filterParams
                                ? filterParams.includes(option.value)
                                : false;
                            return (
                                <Checkbox
                                    ref={(el) =>
                                        category.name === 'Dispensary' &&
                                        ((checkboxRefs as any).current[i] = el)
                                    }
                                    checked={checked}
                                    data-category={category.name}
                                    key={option.name}
                                    label={option.name}
                                    value={option.value}
                                    classNames={{
                                        label: classes.label,
                                    }}
                                    onChange={handleChange}
                                />
                            );
                        })}
                    </Card.Section>
                </React.Fragment>
            ))}
        </Card>
    );
};

export default CategoryFilter;
