import * as React from 'react';
import { createStyles, Drawer } from '@mantine/core';
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
    // isLoading, error, data, isFetching
    products: Product[];
    // error
    isLoading: boolean;
    isFetching: boolean;
    isError: boolean;
    error?: unknown;
}

const PLPTemplate: React.FC<Props> = ({
    products,
    isLoading,
    isFetching,
    isError,
    error,
}) => {
    const { classes } = useStyles();
    const isDesktop = useMediaQuery('(min-width: 1200px)');

    if (isLoading || isFetching) {
    }

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
                    />
                    <ProductList products={products} />
                </div>
            </div>
        </PageContainer>
    );
};

export default PLPTemplate;
