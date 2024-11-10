import {
    Accordion,
    createStyles,
    Text,
    Card,
    CloseButton,
} from '@mantine/core';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
import { Product } from '../../lib/interfaces';
import React from 'react';
import { TERPENES_INFO_MAP, TERPENES_MAP } from '../../lib/constants';

const useStyles = createStyles((theme) => ({
    root: {
        // marginLeft: '0.8rem',
        // [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        //     marginLeft: '0',
        // },
        marginTop: '2rem',
    },
    location: {
        alignSelf: 'end',
        fontSize: '0.8rem',
        color: theme.colors.gray[6],
        marginTop: '0.3rem',
        display: 'none',
    },
    terpenesRoot: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '& > div:first-child': {
            flexBasis: '60%',
        },
        '& > div:nth-child(2)': {
            flexBasis: '40%',
            [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                marginBottom: '3rem',
            },
        },
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            flexDirection: 'column-reverse',
        },
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
    terpeneInfoName: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
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
}));

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

const renderInactiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
        props;

    return (
        <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
            opacity={0.3}
        />
    );
};

const renderActiveShape = (props: any) => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
    } = props;

    return (
        <g>
            <text
                x={cx}
                y={cy}
                dy={8}
                textAnchor="middle"
                fill="#333"
                style={{ fontSize: '13px', fontWeight: 'bold' }}
            >
                <tspan>
                    {TERPENES_MAP[payload.name as keyof typeof TERPENES_MAP]
                        .split(' ')
                        .map((word, i, arr) => (
                            <tspan key={i} x={cx} dy={i === 0 ? 0 : 15}>
                                {word}
                            </tspan>
                        ))}
                </tspan>
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
                filter="url(#shadow)"
                style={{
                    cursor: 'pointer',
                }}
            />
            <defs>
                <filter
                    id="shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                >
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="2" dy="2" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </g>
    );
};

// Define the state type
type TerpeneState = {
    activeTerpene: number | undefined;
    terpeneCardOpen: boolean;
};

// Define action types
type TerpeneAction =
    | { type: 'OPEN_TERPENE'; payload: number }
    | { type: 'CLOSE_TERPENE' };

// Create reducer
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
        default:
            return state;
    }
};

const ProductLabs: React.FC<Props> = ({ product }) => {
    const { classes } = useStyles();
    const [state, dispatch] = React.useReducer(terpeneReducer, {
        activeTerpene: undefined,
        terpeneCardOpen: false,
    });

    const productTerpenes = product.terpenes.filter(
        (terpene) => terpene.value !== 0,
    );

    const onPieClick = (_: any, index: number) => {
        console.log('onPieClick fired', { index });
        dispatch({ type: 'OPEN_TERPENE', payload: index });
    };

    const onPieClose = () => {
        console.log('onPieClose fired');
        dispatch({ type: 'CLOSE_TERPENE' });
    };

    const onPieEnter = (_: any, index: number) => {
        if (!state.terpeneCardOpen) {
            dispatch({ type: 'OPEN_TERPENE', payload: index });
        }
    };

    const onPieLeave = () => {
        if (!state.terpeneCardOpen) {
            dispatch({ type: 'CLOSE_TERPENE' });
        }
    };

    if (!product.includedTerpenes && !product.includedCannabinoids) return null;

    const cannabinoids = product.cannabinoids.length ? (
        <Accordion.Item key={'cannabinoids'} value={'cannabinoids'}>
            <Accordion.Control>
                <Text fw="bold">Cannabinoids</Text>
            </Accordion.Control>
            <Accordion.Panel>{product.includedCannabinoids}</Accordion.Panel>
        </Accordion.Item>
    ) : null;

    const terpenes = productTerpenes.length ? (
        <Accordion.Item key={'terpenes'} value={'terpenes'}>
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
                                    activeShape={renderActiveShape}
                                    inactiveShape={renderInactiveShape}
                                    data={productTerpenes}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    dataKey="value"
                                    onMouseEnter={onPieEnter}
                                    onMouseLeave={onPieLeave}
                                    onClick={onPieClick}
                                    onTouchStart={onPieClick}
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
                                                .name as keyof typeof TERPENES_MAP
                                        ]
                                    }
                                </Text>
                            </Card>
                        )}
                </div>
            </Accordion.Panel>
        </Accordion.Item>
    ) : null;

    return (
        <>
            <div>Active index: {state.activeTerpene}</div>
            <Accordion
                defaultValue={['terpenes', 'cannabinoids']}
                className={classes.root}
                multiple
            >
                {terpenes}
                {cannabinoids}
            </Accordion>
        </>
    );
};

export default ProductLabs;
