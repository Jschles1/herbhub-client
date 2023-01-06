import * as React from 'react';
import {
    AppShell as MantineAppShell,
    Header,
    createStyles,
    Navbar,
    Text,
    Burger,
    MediaQuery,
} from '@mantine/core';
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
}));

interface Props {
    children: React.ReactNode;
}

const AppShell: React.FC<Props> = ({ children }) => {
    const { classes } = useStyles();
    const [opened, setOpened] = React.useState(false);
    return (
        <MantineAppShell
            classNames={{ main: classes.main }}
            padding="md"
            navbar={
                <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                    <Navbar
                        p="md"
                        hiddenBreakpoint="md"
                        hidden={!opened}
                        width={{ sm: 200, lg: 300 }}
                    >
                        <Text>Application navbar</Text>
                    </Navbar>
                </MediaQuery>
            }
            fixed={opened}
            header={
                <Header
                    height={60}
                    p="md"
                    classNames={{ root: classes.headerRoot }}
                    withBorder
                >
                    <div className={classes.headerContainer}>
                        <div className={classes.headerLeft}>
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
                            <Logo />
                        </div>
                        <div className={classes.headerRight}></div>
                    </div>
                </Header>
            }
            footer={<Footer hidden={opened} />}
        >
            {children}
        </MantineAppShell>
    );
};

export default AppShell;
