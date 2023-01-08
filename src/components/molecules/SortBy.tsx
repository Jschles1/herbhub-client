import * as React from 'react';
import { createStyles, Select } from '@mantine/core';
import { useQueryParams } from '../../store';
import { SORT_BY_OPTIONS } from '../../lib/constants';

const useStyles = createStyles((theme) => ({
    root: {
        width: '250px',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            width: 'auto',
        },
    },
}));

const SortBy = () => {
    const { classes } = useStyles();
    const [_, dispatch] = useQueryParams();

    const handleChange = (value: string) => {
        dispatch({ type: 'sortBy', payload: { value } });
    };

    return (
        <div className={classes.root}>
            <Select
                placeholder="Sort By"
                data={SORT_BY_OPTIONS}
                onChange={handleChange}
                clearable={true}
            />
        </div>
    );
};

export default SortBy;
