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
