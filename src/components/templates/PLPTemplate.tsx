import * as React from 'react';
import { createStyles, MediaQuery } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PageContainer from '../molecules/PageContainer';
import CategoryFilter from '../organisms/CategoryFilter';
import ProductList from '../organisms/ProductList';
import ProductListActions from '../organisms/ProductListActions';
import { Product } from '../../lib/interfaces';

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            flexDirection: 'row',
        },
    },
    leftColumn: {
        width: 300,
    },
    rightColumn: {
        flex: 1,
    },
}));

interface Props {
    products: Product[];
    lastUpdated: string;
    isLoading: boolean;
    isFetching: boolean;
    isError: boolean;
    error?: unknown;
}

const PLPTemplate: React.FC<Props> = ({
    products,
    lastUpdated,
    isLoading,
    isFetching,
    isError,
    error,
}) => {
    const { classes } = useStyles();
    const isDesktop = useMediaQuery('(min-width: 1200px)');
    const resultAmount: number = products?.length || 0;

    return (
        <PageContainer>
            {/* PLP */}
            <div className={classes.root}>
                {isDesktop && (
                    <div className={classes.leftColumn}>
                        <CategoryFilter />
                    </div>
                )}

                <div className={classes.rightColumn}>
                    <ProductListActions
                        resultAmount={resultAmount}
                        isLoading={isLoading || isFetching}
                        lastUpdated={lastUpdated}
                    />
                    <ProductList products={products} />
                </div>
            </div>
        </PageContainer>
    );
};

export default PLPTemplate;
