import * as React from 'react';
import { useRouter } from 'next/router';
import {
    AppShell as MantineAppShell,
    Header,
    createStyles,
    Navbar,
    Text,
    Burger,
    MediaQuery,
    Drawer,
} from '@mantine/core';
import CategoryFilter from './CategoryFilter';
import Logo from '../atoms/Logo';
import Footer from '../molecules/Footer';

const useStyles = createStyles((theme) => ({
    main: {
        minHeight: 'calc(100vh - 150px)',
    },
    headerRoot: {
        backgroundColor: '#fff',
        // borderBottom: '1px solid #0b9e43',
    },
    headerContainer: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: '1440px',
        alignItems: 'center',
    },
    headerLeft: { display: 'flex', alignItems: 'center' },
    headerRight: {},
    burger: { marginRight: theme.spacing.xs },
    drawer: {
        overflowX: 'scroll',
    },
}));

interface Props {
    children: React.ReactNode;
}

const AppShell: React.FC<Props> = ({ children }) => {
    const { classes } = useStyles();
    const [opened, setOpened] = React.useState(false);
    const router = useRouter();
    const showBurger = router.pathname === '/';
    return (
        <MantineAppShell
            classNames={{ main: classes.main }}
            padding="md"
            fixed={opened}
            header={
                <>
                    <Drawer
                        opened={opened}
                        onClose={() => setOpened(false)}
                        title="Filter Products"
                        padding="xl"
                        size="xl"
                        className={classes.drawer}
                        withinPortal={false}
                    >
                        <CategoryFilter />
                    </Drawer>
                    <Header
                        height={60}
                        p="md"
                        classNames={{ root: classes.headerRoot }}
                        withBorder
                    >
                        <div className={classes.headerContainer}>
                            <div className={classes.headerLeft}>
                                {showBurger && (
                                    <MediaQuery
                                        largerThan="lg"
                                        styles={{ display: 'none' }}
                                    >
                                        <Burger
                                            opened={opened}
                                            onClick={() => setOpened((o) => !o)}
                                            size="sm"
                                            className={classes.burger}
                                        />
                                    </MediaQuery>
                                )}
                                <Logo />
                            </div>
                            <div className={classes.headerRight}></div>
                        </div>
                    </Header>
                </>
            }
            footer={<Footer hidden={opened} />}
        >
            {children}
        </MantineAppShell>
    );
};

export default AppShell;
