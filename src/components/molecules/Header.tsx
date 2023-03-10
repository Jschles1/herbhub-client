import * as React from 'react';
import { Header as MantineHeader, createStyles } from '@mantine/core';
import Logo from '../atoms/Logo';

const useStyles = createStyles((theme) => ({
    headerRoot: {
        backgroundColor: '#fff',
    },
    root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: '1440px',
        alignItems: 'center',
    },
}));

const Header = () => {
    const { classes } = useStyles();

    return (
        <>
            <MantineHeader
                height={60}
                p="md"
                classNames={{ root: classes.headerRoot }}
                withBorder
            >
                <div className={classes.root}>
                    <Logo />
                </div>
            </MantineHeader>
        </>
    );
};

export default React.memo(Header);
