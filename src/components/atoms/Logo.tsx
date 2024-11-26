import * as React from 'react';
import Image from 'next/image';
import { Text, createStyles, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import LogoIcon from '/public/icons/gshh-logo-2.png';

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },
    logo: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontWeight: 'bold',
        '&:hover': {
            color: theme.colors.green[5],
        },
        transition: 'color 0.2s ease',
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            fontSize: '1rem',
        },
    },
}));

const Logo = () => {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <Image
                src={LogoIcon}
                alt="Garden State Herbhub Logo"
                width={32}
                height={32}
            />
            <Text size="xl">
                <Link href="/menu" className={classes.link}>
                    Garden State Herbhub
                </Link>
            </Text>
        </div>
    );
};

export default React.memo(Logo);
