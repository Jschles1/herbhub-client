import * as React from 'react';
import { Checkbox, createStyles, Card, Text } from '@mantine/core';
import { useQueryParams } from '../../store';
import { CATEGORY_FILTERS } from '../../lib/constants';
import { useEffect } from 'react';

const useStyles = createStyles((theme) => ({
    label: {
        fontSize: '13px',
        cursor: 'pointer',
    },
}));

const CategoryFilter = () => {
    const { classes } = useStyles();
    const [_, dispatch] = useQueryParams();
    const checkboxRefs = React.useRef([]);

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
    }, [CATEGORY_FILTERS]);

    return (
        <Card withBorder radius="md" py="0" mr="1rem">
            {CATEGORY_FILTERS.map((category) => (
                <React.Fragment key={category.name}>
                    <Card.Section inheritPadding py="xs">
                        <Text weight={500}>{category.name}</Text>
                    </Card.Section>

                    <Card.Section inheritPadding py="xs">
                        {category.options.map((option, i) => (
                            <Checkbox
                                ref={(el) =>
                                    category.name === 'Dispensary' &&
                                    ((checkboxRefs as any).current[i] = el)
                                }
                                data-category={category.name}
                                key={option.name}
                                label={option.name}
                                value={option.value}
                                classNames={{
                                    label: classes.label,
                                }}
                                onChange={handleChange}
                            />
                        ))}
                    </Card.Section>
                </React.Fragment>
            ))}
        </Card>
    );
};

export default CategoryFilter;
