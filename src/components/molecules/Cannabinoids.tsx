import {
    Accordion,
    Card,
    CloseButton,
    createStyles,
    Progress,
    Text,
} from '@mantine/core';
import { Product } from '../../lib/interfaces';
import React from 'react';
import {
    CANNABINOIDS_FULL_NAME_MAP,
    CANNABINOIDS_INFO_MAP,
    CANNABINOIDS_MAP,
} from '../../lib/constants';
import InfoButton from '../atoms/InfoButton';

interface Props {
    product: Product;
}

const useStyles = createStyles((theme) => ({
    cannabinoidsRoot: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        position: 'relative',
        '& > div': {
            flexBasis: '48%',
            marginBottom: '2.5rem',
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            flexDirection: 'column',
            '& > div': {
                flexBasis: '100%',
                width: '100%',
            },
        },
    },
    cannabinoidInfoItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    cannabinoidName: {
        fontWeight: 'bold',
        fontSize: '0.9rem',
    },
    cannabinoidNameContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.3rem',
        marginBottom: '0.2rem',
    },
    cannabinoidValue: {
        fontSize: '0.8rem',
    },
    cannabinoidCard: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '150px',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            height: '275px',
        },
    },
    cannabinoidInfoName: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        maxWidth: '80%',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            fontSize: '1rem',
        },
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
    cannabinoidInfoDescription: {
        fontSize: '0.8125rem',
        maxWidth: '90%',
        marginTop: '1rem',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            maxWidth: '100%',
        },
    },
}));

type CannabinoidState = {
    activeCannabinoid: number | undefined;
    cannabinoidCardOpen: boolean;
};

type CannabinoidAction =
    | { type: 'OPEN_CANNABINOID'; payload: number }
    | { type: 'CLOSE_CANNABINOID' };

const cannabinoidReducer = (
    state: CannabinoidState,
    action: CannabinoidAction,
): CannabinoidState => {
    switch (action.type) {
        case 'OPEN_CANNABINOID':
            return {
                activeCannabinoid: action.payload,
                cannabinoidCardOpen: true,
            };
        case 'CLOSE_CANNABINOID':
            return {
                activeCannabinoid: undefined,
                cannabinoidCardOpen: false,
            };
        default:
            return state;
    }
};

const Cannabinoids: React.FC<Props> = ({ product }) => {
    const { classes } = useStyles();
    const productHasTerpenes = !!product.includedTerpenes;

    const [cannabinoidState, cannabinoidDispatch] = React.useReducer(
        cannabinoidReducer,
        {
            activeCannabinoid: undefined,
            cannabinoidCardOpen: false,
        },
    );

    const totalCannabinoids = Number(
        product.cannabinoids
            .reduce((acc, cannabinoid) => acc + cannabinoid.value, 0)
            .toFixed(2),
    );

    const onCannabinoidClick = (_: any, index: number) => {
        cannabinoidDispatch({ type: 'OPEN_CANNABINOID', payload: index });
    };

    const onCannabinoidClose = () => {
        cannabinoidDispatch({ type: 'CLOSE_CANNABINOID' });
    };

    if (!product.includedCannabinoids) return null;

    return product.cannabinoids.length ? (
        <Accordion.Item
            key={'cannabinoids'}
            value={'cannabinoids'}
            style={
                !productHasTerpenes
                    ? { borderTop: '1px solid rgb(222, 226, 230)' }
                    : {}
            }
        >
            <Accordion.Control>
                <Text fw="bold">Cannabinoids</Text>
            </Accordion.Control>
            <Accordion.Panel>
                <div className={classes.cannabinoidsRoot}>
                    {product.cannabinoids.map((cannabinoid, index) => {
                        const cannabinoidName =
                            CANNABINOIDS_MAP[
                                cannabinoid.name as keyof typeof CANNABINOIDS_MAP
                            ];
                        const percentTotal = Number(
                            (
                                (cannabinoid.value / totalCannabinoids) *
                                100
                            ).toFixed(2),
                        );
                        return (
                            <div key={cannabinoid.name}>
                                <div className={classes.cannabinoidInfoItem}>
                                    <div
                                        className={
                                            classes.cannabinoidNameContainer
                                        }
                                    >
                                        <Text
                                            className={classes.cannabinoidName}
                                        >
                                            {cannabinoidName}
                                        </Text>
                                        <InfoButton
                                            onClick={() =>
                                                onCannabinoidClick(null, index)
                                            }
                                        />
                                    </div>
                                    <Text className={classes.cannabinoidValue}>
                                        {cannabinoid.value}
                                        {cannabinoid.unit}
                                    </Text>
                                </div>
                                <div>
                                    <Progress
                                        value={percentTotal}
                                        size="md"
                                        color="green"
                                    />
                                </div>
                            </div>
                        );
                    })}
                    {cannabinoidState.activeCannabinoid !== undefined &&
                        cannabinoidState.cannabinoidCardOpen && (
                            <Card
                                className={classes.cannabinoidCard}
                                shadow="lg"
                                p="xl"
                            >
                                <CloseButton
                                    className={classes.closeButton}
                                    onClick={onCannabinoidClose}
                                    size="lg"
                                />
                                <Text className={classes.cannabinoidInfoName}>
                                    {
                                        CANNABINOIDS_FULL_NAME_MAP[
                                            product.cannabinoids[
                                                cannabinoidState
                                                    .activeCannabinoid
                                            ]
                                                .name as keyof typeof CANNABINOIDS_FULL_NAME_MAP
                                        ]
                                    }
                                </Text>
                                <Text
                                    className={
                                        classes.cannabinoidInfoDescription
                                    }
                                >
                                    {
                                        CANNABINOIDS_INFO_MAP[
                                            product.cannabinoids[
                                                cannabinoidState
                                                    .activeCannabinoid
                                            ]
                                                .name as keyof typeof CANNABINOIDS_INFO_MAP
                                        ]
                                    }
                                </Text>
                            </Card>
                        )}
                </div>
            </Accordion.Panel>
        </Accordion.Item>
    ) : null;
};

export default Cannabinoids;
