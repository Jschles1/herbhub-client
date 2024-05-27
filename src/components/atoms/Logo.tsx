import * as React from 'react';
import Image from 'next/image';
import { Text, createStyles, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import WeedIcon from '/public/icons/icons8-weed-64.png';

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
        color: '#000',
        fontWeight: 'bold',
        letterSpacing: '0.1rem',
        '&:hover': {
            color: theme.colors.green[5],
        },
        transition: 'color 0.2s ease',
    },
}));

const Logo = () => {
    const theme = useMantineTheme();
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <Image src={WeedIcon} alt="Weed Icon" width={32} height={32} />
            <Text size="xl">
                <Link href="/" className={classes.link}>
                    Jersey Herbhub
                </Link>
            </Text>
        </div>
    );
};

export default React.memo(Logo);
