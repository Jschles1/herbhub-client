import * as React from 'react';
import { createStyles, MediaQuery } from '@mantine/core';
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
    const resultAmount: number = products?.length || 0;

    // TODO: Add error handling

    return (
        <PageContainer>
            {/* PLP */}
            <div className={classes.root}>
                <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
                    <div className={classes.leftColumn}>
                        <CategoryFilter />
                    </div>
                </MediaQuery>

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
