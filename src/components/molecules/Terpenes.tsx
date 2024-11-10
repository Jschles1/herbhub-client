import * as React from 'react';
import {
    Accordion,
    Card,
    CloseButton,
    createStyles,
    Text,
} from '@mantine/core';
import { Product } from '../../lib/interfaces';
import { TERPENES_INFO_MAP, TERPENES_MAP } from '../../lib/constants';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import TerpeneActiveShape from '../atoms/TerpeneActiveShape';
import TerpeneInactiveShape from '../atoms/TerpeneInactiveShape';

const COLORS = [
    '#C8D5C9', // Lightest green
    '#A8C6A9',
    '#85B687',
    '#61A764',
    '#469B4A',
    '#2C8F30',
    '#238027',
    '#186E1C',
    '#0E5D12',
    '#003E00',
    '#002D00',
    '#000F00', // Darkest green
];

interface Props {
    product: Product;
}

const getColor = (index: number) => {
    return COLORS[index % COLORS.length];
};

type TerpeneState = {
    activeTerpene: number | undefined;
    terpeneCardOpen: boolean;
};

// Define action types
type TerpeneAction =
    | { type: 'OPEN_TERPENE'; payload: number }
    | { type: 'CLOSE_TERPENE' }
    | { type: 'HOVER_TERPENE'; payload: number }
    | { type: 'UNHOVER_TERPENE' };

// Create reducers
const terpeneReducer = (
    state: TerpeneState,
    action: TerpeneAction,
): TerpeneState => {
    switch (action.type) {
        case 'OPEN_TERPENE':
            return {
                activeTerpene: action.payload,
                terpeneCardOpen: true,
            };
        case 'CLOSE_TERPENE':
            return {
                activeTerpene: undefined,
                terpeneCardOpen: false,
            };
        case 'HOVER_TERPENE':
            return {
                ...state,
                activeTerpene: action.payload,
            };
        case 'UNHOVER_TERPENE':
            return {
                ...state,
                activeTerpene: undefined,
            };
        default:
            return state;
    }
};

const useStyles = createStyles((theme) => ({
    terpenesRoot: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '& > div:first-of-type': {
            flexBasis: '60%',
        },
        '& > div:nth-of-type(2)': {
            flexBasis: '40%',
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                marginBottom: '3rem',
            },
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            flexDirection: 'column-reverse',
        },
    },
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
    pieChart: {
        marginLeft: 'auto',
    },
    pieChartCell: {
        cursor: 'pointer',
    },
    pieChartRadius: {
        '& > g': {
            '&:focus': {
                outline: 'none',
            },
        },
    },
    terpeneInfoContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
    },
    terpeneInfoItem: {
        flexBasis: '48%',
    },
    terpeneTextContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.2rem',
        cursor: 'pointer',
    },
    terpeneName: {
        fontSize: '0.9375rem',
        fontWeight: 'bold',
    },
    terpeneCard: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1000,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            bottom: 0,
            height: '60%',
            top: 'auto',
        },
    },
    cannabinoidCard: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    terpeneInfoName: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
    },
    cannabinoidInfoName: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        maxWidth: '80%',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
    },
    closeButton: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
    terpeneInfoDescription: {
        fontSize: '0.8125rem',
        maxWidth: '90%',
        marginTop: '1rem',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            maxWidth: '100%',
        },
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

const Terpenes: React.FC<Props> = ({ product }) => {
    const { classes } = useStyles();
    const [state, dispatch] = React.useReducer(terpeneReducer, {
        activeTerpene: undefined,
        terpeneCardOpen: false,
    });

    const productTerpenes = product.terpenes.filter(
        (terpene) => terpene.value !== 0,
    );

    const onPieClick = (_: any, index: number) => {
        dispatch({ type: 'OPEN_TERPENE', payload: index });
    };

    const onPieClose = () => {
        dispatch({ type: 'CLOSE_TERPENE' });
    };

    const onPieEnter = (_: any, index: number) => {
        if (!('ontouchstart' in window) && !state.terpeneCardOpen) {
            dispatch({ type: 'HOVER_TERPENE', payload: index });
        }
    };

    const onPieLeave = () => {
        if (!state.terpeneCardOpen) {
            dispatch({ type: 'UNHOVER_TERPENE' });
        }
    };

    if (!product.includedTerpenes) return null;

    return productTerpenes.length ? (
        <Accordion.Item
            key={'terpenes'}
            value={'terpenes'}
            style={{ borderTop: '1px solid rgb(222, 226, 230)' }}
        >
            <Accordion.Control>
                <Text fw="bold">Terpenes</Text>
            </Accordion.Control>
            <Accordion.Panel>
                <div className={classes.terpenesRoot}>
                    <div className={classes.terpeneInfoContainer}>
                        {productTerpenes.map((terpene, index) => {
                            const terpeneName =
                                TERPENES_MAP[
                                    terpene.name as keyof typeof TERPENES_MAP
                                ];
                            return (
                                <div
                                    className={classes.terpeneInfoItem}
                                    key={terpene.name}
                                    onMouseEnter={() => onPieEnter(null, index)}
                                    onMouseLeave={onPieLeave}
                                    onClick={() => onPieClick(null, index)}
                                    onTouchStart={(e) => {
                                        // e.preventDefault();
                                        onPieClick(null, index);
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            onPieClick(null, index);
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div
                                        className={classes.terpeneTextContainer}
                                        style={{
                                            opacity:
                                                state.activeTerpene ===
                                                undefined
                                                    ? 1
                                                    : state.activeTerpene ===
                                                      index
                                                    ? 1
                                                    : 0.3,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 12,
                                                height: 12,
                                                borderRadius: '50%',
                                                backgroundColor:
                                                    getColor(index),
                                                marginRight: 8,
                                            }}
                                        />
                                        <Text className={classes.terpeneName}>
                                            {terpeneName}
                                        </Text>
                                    </div>
                                    <div>
                                        <Text size={13}>
                                            {terpene.value}
                                            {terpene.unit}
                                        </Text>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div>
                        <ResponsiveContainer
                            width={200}
                            height={200}
                            className={classes.pieChart}
                        >
                            <PieChart width={400} height={400}>
                                <Pie
                                    activeIndex={state.activeTerpene}
                                    activeShape={TerpeneActiveShape}
                                    inactiveShape={TerpeneInactiveShape}
                                    data={productTerpenes}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    dataKey="value"
                                    onMouseEnter={onPieEnter}
                                    onMouseLeave={onPieLeave}
                                    onClick={onPieClick}
                                    onTouchStart={(e, index) => {
                                        // e.preventDefault();
                                        onPieClick(e, index);
                                    }}
                                    className={classes.pieChartRadius}
                                >
                                    {productTerpenes.map((_, index) => (
                                        <Cell
                                            className={classes.pieChartCell}
                                            key={`cell-${index}`}
                                            fill={getColor(index)}
                                        />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    {state.activeTerpene !== undefined &&
                        state.terpeneCardOpen && (
                            <Card
                                className={classes.terpeneCard}
                                shadow="lg"
                                p="xl"
                            >
                                <CloseButton
                                    className={classes.closeButton}
                                    onClick={onPieClose}
                                    size="lg"
                                />
                                <Text className={classes.terpeneInfoName}>
                                    {
                                        TERPENES_MAP[
                                            productTerpenes[state.activeTerpene]
                                                .name as keyof typeof TERPENES_MAP
                                        ]
                                    }
                                </Text>
                                <Text
                                    className={classes.terpeneInfoDescription}
                                >
                                    {
                                        TERPENES_INFO_MAP[
                                            productTerpenes[state.activeTerpene]
                                                .name as keyof typeof TERPENES_INFO_MAP
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

export default Terpenes;
