import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import PageContainer from '../components/molecules/PageContainer';
import PrimaryButton from '../components/atoms/PrimaryButton';
import { Card, createStyles } from '@mantine/core';
import Image from 'next/image';
import LogoIcon from '/public/icons/gshh-logo-2.png';

const useStyles = createStyles((theme) => ({
    root: {
        textAlign: 'center',
    },
    titleContainer: {
        color: theme.colors.dark[4],
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
        color: theme.colors.green[5],
        margin: 0,
        lineHeight: 'normal',
    },
    titleSpan: {
        fontSize: '1.2rem',
        margin: 0,
        fontWeight: 'bold',
        lineHeight: 'normal',
        fontStyle: 'italic',
    },
    titleParagraph: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        margin: '2rem auto',
        width: '35%',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            width: '80%',
        },
    },
    logo: {
        marginTop: '1rem',
        marginBottom: '2rem',
    },
    features: {
        margin: '5rem auto',
        color: theme.colors.dark[4],
    },
    featuresList: {
        display: 'flex',
        gap: '2rem',
        maxWidth: '60%',
        margin: '0 auto',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            maxWidth: '90%',
        },
    },
    featureCard: {
        width: '405px',
        height: '200px',
        color: theme.colors.dark[4],
        textAlign: 'left',
        '& h3': {
            marginTop: 0,
        },
        '& p': {
            margin: 0,
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            width: '100%',
        },
    },
    cta: {
        marginBottom: '5rem',
    },
}));

const FEATURES = [
    {
        title: 'Comprehensive Product Listings',
        description:
            'Browse all cannabis products from licensed NJ dispensaries in one place.',
    },
    {
        title: 'Advanced Filtering',
        description:
            'Filter products by dispensary location,strain, prevalence, category, brand, and price to find exactly what you need.',
    },
    {
        title: 'Dispensary Information',
        description:
            'Access detailed info about each dispensary, including location, directions, and hours.',
    },
    {
        title: 'Real-Time Price Updates (Coming Soon!)',
        description:
            'Receive real-time updates on product price changes via SMS.',
    },
];

const Home: NextPage = () => {
    const { classes } = useStyles();

    return (
        <>
            <Head>
                <title>Garden State Herbhub</title>
            </Head>
            <PageContainer>
                <div className={classes.root}>
                    <div>
                        <Image
                            src={LogoIcon}
                            alt="Garden State Herbhub"
                            width={200}
                            height={200}
                            className={classes.logo}
                        />
                        <div className={classes.titleContainer}>
                            <p className={classes.titleSpan}>
                                Find Your Perfect Cannabis Match With
                            </p>
                            <h1 className={classes.title}>
                                Garden State Herbhub
                            </h1>
                            <p className={classes.titleParagraph}>
                                Compare and discover cannabis products from
                                licensed New Jersey dispensaries.
                            </p>
                        </div>
                    </div>
                    <PrimaryButton component="a" href="/menu" size="lg">
                        Browse Products
                    </PrimaryButton>
                    <div className={classes.features}>
                        <h2>
                            Your Guide to New Jersey&apos;s Cannabis Selection
                        </h2>
                        <div className={classes.featuresList}>
                            {FEATURES.map((feature) => (
                                <Card
                                    key={feature.title}
                                    withBorder
                                    className={classes.featureCard}
                                >
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div className={classes.cta}>
                        <h3 className={classes.titleParagraph}>
                            Ready to Explore New Jersey&apos;s Cannabis Scene?
                        </h3>
                        <PrimaryButton component="a" href="/menu" size="lg">
                            Browse Products
                        </PrimaryButton>
                    </div>
                </div>
            </PageContainer>
        </>
    );
};

export default Home;
