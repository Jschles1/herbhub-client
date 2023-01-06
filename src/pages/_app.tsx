import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import AppShell from '../components/organisms/AppShell';
import { QueryParamsProvider } from '../store';
import Footer from '../components/molecules/Footer';

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <MantineProvider
                        withGlobalStyles
                        withNormalizeCSS
                        theme={{
                            globalStyles: (theme) => ({
                                '*, *::before, *::after': {
                                    boxSizing: 'border-box',
                                },
                                body: {
                                    ...theme.fn.fontStyles(),
                                    padding: 0,
                                    margin: 0,
                                    background: theme.colors.gray[1],
                                },
                            }),
                            breakpoints: {
                                xs: 400,
                                sm: 600,
                                md: 900,
                                lg: 1200,
                                xl: 1440,
                            },
                            colors: {
                                wgreen: [
                                    '#E9FBF7',
                                    '#C3F4E7',
                                    '#9CEDD8',
                                    '#75E6C9',
                                    '#4EDFB9',
                                    '#28D7AA',
                                    '#20AC88',
                                    '#188166',
                                    '#105644',
                                    '#082B22',
                                ],
                            },
                            primaryColor: 'gray',
                        }}
                    >
                        <QueryParamsProvider>
                            <AppShell>
                                <Component {...pageProps} />
                            </AppShell>
                        </QueryParamsProvider>
                    </MantineProvider>
                </Hydrate>
            </QueryClientProvider>
        </>
    );
}
