import * as React from 'react';
import { createStyles, TextInput, TextInputProps } from '@mantine/core';
import { useQueryParams } from '../../store';
import { debounce } from '../../lib/helpers';

const useStyles = createStyles((theme) => ({
    root: {
        width: 300,
        marginRight: '1rem',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: 'auto',
            marginRight: 0,
            marginBottom: '1rem',
        },
    },
}));

interface Props extends TextInputProps {}

const SearchInput: React.FC<Props> = (props) => {
    const { classes } = useStyles();
    const [_, dispatch] = useQueryParams();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        dispatch({ type: 'search', payload: { value } });
    };

    return (
        <div className={classes.root}>
            <TextInput
                placeholder="Search Products"
                classNames={{ root: classes.root }}
                onChange={debounce(handleChange)}
                {...props}
            />
        </div>
    );
};

export default SearchInput;
