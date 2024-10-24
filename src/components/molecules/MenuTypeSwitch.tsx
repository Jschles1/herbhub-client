import * as React from 'react';
import { createStyles, Switch, Text } from '@mantine/core';
import { useQueryParams } from '../../store';

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            marginTop: '1rem',
            justifyContent: 'start',
        },
    },
    switchBody: {
        display: 'flex',
    },
    switchTrack: {
        cursor: 'pointer',
    },
    text: {
        marginLeft: '2rem',
        marginRight: '0.5rem',
        fontWeight: 'bold',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            marginLeft: '0',
        },
    },
}));

interface Props {
    // value: boolean;
    // onChange: (value: boolean) => void;
}

const MenuTypeSwitch: React.FC<Props> = () => {
    const { classes } = useStyles();
    const [_, dispatch] = useQueryParams();
    const [value, setValue] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.checked);
        dispatch({
            type: 'menuType',
            payload: {
                value: event.currentTarget.checked ? 'rec' : 'med',
            },
        });
    };

    return (
        <div className={classes.root}>
            <Text className={classes.text}>Menu Type: </Text>
            <Switch
                checked={value}
                onLabel="Adult Use"
                offLabel="Medical"
                size="xl"
                onChange={handleChange}
                classNames={{
                    body: classes.switchBody,
                    track: classes.switchTrack,
                }}
            />
        </div>
    );
};

export default MenuTypeSwitch;
