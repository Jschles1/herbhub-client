import * as React from 'react';
import { Card, createStyles, Text, Skeleton } from '@mantine/core';
import SearchInput from '../molecules/SearchInput';
import SortBy from '../molecules/SortBy';
import MenuTypeSwitch from '../molecules/MenuTypeSwitch';

const useStyles = createStyles((theme) => ({
    cardRoot: {
        overflow: 'visible',
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        [`@media (max-width: 750px)`]: {
            display: 'block',
        },
    },
    skeleton: {
        float: 'right',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            float: 'none',
        },
    },
    results: {
        flex: 1,
        textAlign: 'right',
        alignSelf: 'center',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            textAlign: 'left',
            marginTop: '1rem',
        },
    },
}));

interface Props {
    resultAmount: number;
    isLoading: boolean;
}

const ProductListActions: React.FC<Props> = ({ resultAmount, isLoading }) => {
    const { classes } = useStyles();

    return (
        <Card withBorder className={classes.cardRoot} mb="1rem">
            <div className={classes.root}>
                <SearchInput />
                <SortBy />
                <MenuTypeSwitch />
                <div className={classes.results}>
                    <Skeleton
                        visible={isLoading}
                        width={100}
                        className={classes.skeleton}
                    >
                        <Text>{resultAmount} Results</Text>
                    </Skeleton>
                </div>
            </div>
        </Card>
    );
};

export default ProductListActions;
