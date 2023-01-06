import * as React from 'react';
import { Card, createStyles, Text, Skeleton, Button } from '@mantine/core';
import SearchInput from '../molecules/SearchInput';
import SortBy from '../molecules/SortBy';
import { useQueryParams } from '../../store';

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
    },
    results: {
        flex: 1,
        textAlign: 'right',
        alignSelf: 'center',
    },
}));

interface Props {
    resultAmount: number;
    isLoading: boolean;
}

const ProductListActions: React.FC<Props> = ({ resultAmount, isLoading }) => {
    const { classes } = useStyles();
    const [_, dispatch] = useQueryParams();

    const handleReset = () => {
        dispatch({ type: 'reset', payload: { value: '' } });
    };

    return (
        <Card withBorder className={classes.cardRoot} mb="1rem">
            <div className={classes.root}>
                <SearchInput />
                <SortBy />
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
