import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { createStyles } from '@mantine/core';
import Link from 'next/link';
import PageContainer from '../components/molecules/PageContainer';

const useStyles = createStyles((theme) => ({
    header: {
        color: theme.colors.green[5],
        marginTop: 0,
    },
    root: {},
}));

const FAQ: NextPage = () => {
    const { classes } = useStyles();
    return (
        <>
            <Head>
                <title>Garden State Herbhub</title>
            </Head>
            <PageContainer>
                <h1 className={classes.header}>Frequently Asked Questions</h1>
                <div className={classes.root}>
                    <h2>What is Garden State Herbhub?</h2>
                    <p>
                        Garden State Herbhub is a website that allows you to
                        search and find cannabis products currently being sold
                        in New Jersey dispensaries.
                    </p>

                    <h2>What types of dispensaries are supported?</h2>
                    <p>
                        We currently support all dispensaries on New
                        Jersey&apos;s official list of approved dispensaries.
                    </p>

                    <h2>Do you plan on adding more dispensaries?</h2>
                    <p>
                        Yes, we plan on adding any new dispensaries as they are
                        added to New Jersey&apos;s official list of approved
                        dispensaries, which can be found{' '}
                        <Link
                            href="https://data.nj.gov/Reference-Data/New-Jersey-Cannabis-Dispensary-Locations/uyq5-2c2g"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </Link>
                        .
                    </p>
                </div>
            </PageContainer>
        </>
    );
};

export default FAQ;
