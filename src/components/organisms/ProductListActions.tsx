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
    lastUpdated: {
        fontStyle: 'italic',
        fontSize: '0.8rem',
    },
    resultAmount: {
        fontSize: '0.8rem',
    },
}));

interface Props {
    resultAmount: number;
    isLoading: boolean;
    lastUpdated: string;
}

const ProductListActions: React.FC<Props> = ({
    resultAmount,
    isLoading,
    lastUpdated,
}) => {
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
                        width={200}
                        className={classes.skeleton}
                    >
                        <div>
                            <Text className={classes.lastUpdated}>
                                Last Updated: {lastUpdated}
                            </Text>
                            <Text className={classes.resultAmount}>
                                {resultAmount} Results
                            </Text>
                        </div>
                    </Skeleton>
                </div>
            </div>
        </Card>
    );
};

export default ProductListActions;
