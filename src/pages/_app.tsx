import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import { MantineProvider } from '@mantine/core';
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import AppShell from '../components/organisms/AppShell';
import AgeVerificationModal from '../components/organisms/AgeVerificationModal';
import { QueryParamsProvider } from '../store';

// const queryClient = new QueryClient();

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    const [queryClient] = React.useState(() => {
        const client = new QueryClient({
            defaultOptions: {
                queries: {
                    cacheTime: 1000 * 60 * 5,
                    staleTime: 1000 * 60,
                    refetchOnMount: false,
                },
            },
        });

        // Debug when client is created
        // console.log('QueryClient created:', new Date().toISOString());

        // // Debug cache events
        // client.getQueryCache().subscribe((event) => {
        //     console.log('Cache event:', {
        //         type: event.type,
        //         key: event.query.queryKey,
        //         time: new Date().toISOString(),
        //         // Add this to see if data exists
        //         hasData: !!event.query.state.data,
        //     });
        // });

        return client;
    });

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
                                    background: '#fff',
                                },
                            }),
                            breakpoints: {
                                xs: 400,
                                sm: 600,
                                md: 900,
                                lg: 1200,
                                xl: 1440,
                            },
                            primaryColor: 'gray',
                        }}
                    >
                        <QueryParamsProvider>
                            <AppShell>
                                <AgeVerificationModal />
                                <Component {...pageProps} />
                                <Analytics />
                            </AppShell>
                        </QueryParamsProvider>
                    </MantineProvider>
                </Hydrate>
            </QueryClientProvider>
        </>
    );
}
