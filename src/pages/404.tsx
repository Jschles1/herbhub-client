import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { createStyles } from '@mantine/core';
import PageContainer from '../components/molecules/PageContainer';
import PrimaryButton from '../components/atoms/PrimaryButton';

const useStyles = createStyles((theme) => ({
    header: {
        border: `3px solid ${theme.colors.dark[4]}`,
        borderRadius: '100%',
        margin: '0 auto',
        width: '120px',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    },
    notFound: {
        fontSize: '2rem',
    },
}));

const FAQ: NextPage = () => {
    const { classes } = useStyles();
    return (
        <>
            <Head>
                <title>Garden State Herbhub</title>
            </Head>
            <PageContainer>
                <div className={classes.root}>
                    <div className={classes.content}>
                        <h1 className={classes.header}>404</h1>
                        <div className={classes.notFound}>Not Found</div>
                        <div>
                            The requested URL was not found on this server.
                        </div>
                        <PrimaryButton component={'a'} href="/">
                            Go to Home Page
                        </PrimaryButton>
                    </div>
                </div>
            </PageContainer>
        </>
    );
};

export default FAQ;
