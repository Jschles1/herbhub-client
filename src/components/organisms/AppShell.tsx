import * as React from 'react';
import { useRouter } from 'next/router';
import {
    AppShell as MantineAppShell,
    Header,
    createStyles,
    Burger,
    MediaQuery,
    Drawer,
    Button,
} from '@mantine/core';
import CategoryFilter from './CategoryFilter';
import Logo from '../atoms/Logo';
import Footer from '../molecules/Footer';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    main: {
        minHeight: 'calc(100vh - 150px)',
    },
    headerRoot: {
        backgroundColor: theme.colors.gray[1],
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
    faqLink: {
        fontWeight: 'bold',
        color: '#000',
        textDecoration: 'none',
        '&:hover': {
            color: theme.colors.green[5],
        },
        transition: 'color 0.2s ease',
    },
    applyButton: {
        marginTop: theme.spacing.md,
        width: 'calc(100% - 1rem)',
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
                        <Button
                            color="green"
                            variant="light"
                            size="lg"
                            onClick={() => setOpened(false)}
                            className={classes.applyButton}
                        >
                            Apply
                        </Button>
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
                            <div className={classes.headerRight}>
                                <Link className={classes.faqLink} href="/faq">
                                    FAQ
                                </Link>
                            </div>
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
