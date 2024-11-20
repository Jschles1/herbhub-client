import * as React from 'react';
import { Footer as MantineFooter, createStyles, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    container: {
        backgroundColor: theme.colors.dark[4],
    },
    root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        margin: '0 auto',
        maxWidth: '1440px',
        alignItems: 'center',
        fontSize: '0.8rem',
        color: '#fff',
        '& > div:first-of-type': {
            flexBasis: '70%',
        },
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            padding: '1rem',
            fontSize: '0.7rem',
            display: 'block',
        },
    },
    copy: {
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            marginBottom: '0.8rem',
        },
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        fontWeight: 'bold',
        marginTop: '0.5rem',
        display: 'inline-block',
        '&:hover': {
            color: theme.colors.green[5],
        },
        transition: 'color 0.2s ease',
        // [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
        //     fontSize: '1rem',
        // },
    },
}));

interface Props {
    hidden: boolean;
}

const Footer: React.FC<Props> = ({ hidden }) => {
    const { classes } = useStyles();
    const isDesktop = useMediaQuery('(min-width: 1200px)');

    return hidden ? null : (
        <MantineFooter
            height={isDesktop ? 90 : 'auto'}
            px="sm"
            className={classes.container}
        >
            <div className={classes.root}>
                <div className={classes.copy}>
                    <div>
                        &copy; {new Date().getFullYear()} Garden State Herbhub
                    </div>
                    <div>
                        <Link href="/faq" className={classes.link}>
                            Frequently Asked Questions
                        </Link>
                    </div>
                </div>
                <div>
                    <Text weight="bold">Disclaimer:</Text>
                    <Text italic>
                        Garden State Herbhub is not affiliated with the state of
                        New Jersey or any of the retailers listed on this site.
                        Garden State Herbhub does not vet or endorse any
                        retailer listed on this site. Also, retailers&apos; web
                        sites can change at any time and products listed may be
                        sold out at the time of listing. This could have a
                        negative effect on Garden State Herbhub&apos;s ability
                        to obtain accurate (or any) information. Garden State
                        Herbhub is not responsible for inaccurate product
                        information displayed.
                    </Text>
                </div>
            </div>
        </MantineFooter>
    );
};

export default React.memo(Footer);
