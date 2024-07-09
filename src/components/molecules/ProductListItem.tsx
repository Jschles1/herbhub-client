import * as React from 'react';
import { Card, createStyles, Text, MediaQuery, Badge } from '@mantine/core';
import Image from 'next/image';
import { Product } from '../../lib/interfaces';
import {
    mapProductImage,
    getProductPrices,
    getProductUrl,
    parseProductWeightUnit,
} from '../../lib/helpers';
import ProductInfoBadges from './ProductInfoBadges';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        transition: 'border ease 0.1s',
        '&:hover': {
            border: '1px solid',
            borderColor: '#b3b6b9',
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column',
            flexBasis: 'calc(50% - 8px)',
            height: '410px',
            position: 'relative',
        },
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        margin: '0 auto',
        width: 'calc(100% - 100px)',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '100%',
            margin: '0',
        },
    },
    inlineText: {
        marginRight: '0.5rem',
        display: 'inline-block',
    },
    productTextContainer: {
        marginLeft: '0.5rem',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginLeft: '0',
        },
    },
    productText: {
        marginTop: '0.5rem',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
        },
    },
    badge: {
        height: '25px',
    },
    imageContainer: {
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            margin: '0 auto 0.5rem',
        },
    },
    location: {
        alignSelf: 'end',
    },
    priceInfo: {
        textAlign: 'right',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            textAlign: 'left',
            marginLeft: '0.5rem',
            marginTop: '0.5rem',
        },
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginLeft: '0',
            position: 'absolute',
            bottom: '1rem',
        },
    },
}));

interface Props {
    product: Product;
}

const ProductListItem: React.FC<Props> = ({ product }) => {
    const { classes } = useStyles();
    const isMobile = useMediaQuery('(max-width: 750px)');

    const prices = getProductPrices(product);
    const productUrl = getProductUrl(product);
    const hasSalePrice =
        parseInt(prices.promoPrice) > 0 &&
        parseInt(prices.promoPrice) !== parseInt(prices.price);
    const thcInfo = product.thc ? ` - THC: %${product.thc.toFixed(2)}` : '';
    const cbdInfo = product.cbd ? ` - CBD: %${product.cbd.toFixed(2)}` : '';
    const dimensions = isMobile
        ? { width: 130, height: 140 }
        : { width: 100, height: 100 };

    if (product.prices.length > 1) {
        // console.log({ weight: product.weight });
    }

    return (
        <Card
            component="a"
            href={productUrl}
            className={classes.root}
            shadow="sm"
            withBorder
        >
            <div style={{ position: 'relative' }}>
                {hasSalePrice && (
                    <Badge
                        color="green"
                        sx={{ position: 'absolute', top: '4px' }}
                    >
                        Sale
                    </Badge>
                )}
                <Image
                    src={mapProductImage(product)}
                    width={dimensions.width}
                    height={dimensions.height}
                    priority
                    className={classes.imageContainer}
                    alt={product.strain}
                    unoptimized
                />
            </div>

            <div className={classes.info}>
                <div className={classes.topRow}>
                    <ProductInfoBadges
                        product={product}
                        hasSalePrice={hasSalePrice}
                    />
                    <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                        <div className={classes.priceInfo}>
                            {hasSalePrice && (
                                <Text
                                    size={14}
                                    weight="bold"
                                    color="green"
                                    className={classes.inlineText}
                                >
                                    {`$${prices.promoPrice}`}
                                </Text>
                            )}
                            <Text
                                size={14}
                                weight="bold"
                                className={classes.inlineText}
                            >
                                <Text
                                    component="span"
                                    strikethrough={hasSalePrice}
                                >{`$${prices.price}`}</Text>

                                <Text component="span" weight="normal">
                                    {parseProductWeightUnit(prices.weight)}
                                </Text>
                            </Text>
                        </div>
                    </MediaQuery>
                </div>

                <div className={classes.productTextContainer}>
                    <Text
                        size={14}
                        weight={700}
                        className={classes.productText}
                    >
                        {product.strain}
                    </Text>

                    <Text
                        size={12}
                        weight={300}
                        className={classes.productText}
                    >
                        {product.brand}
                    </Text>

                    <Text
                        size={12}
                        weight={300}
                        className={classes.productText}
                        color="gray"
                    >
                        {product.strainType.toUpperCase() + thcInfo + cbdInfo}
                    </Text>
                </div>

                <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                    <div className={classes.priceInfo}>
                        {hasSalePrice && (
                            <Text
                                size={14}
                                weight="bold"
                                color="green"
                                className={classes.inlineText}
                            >
                                {`$${prices.promoPrice}`}
                                <Text component="span" weight="normal">
                                    {parseProductWeightUnit(prices.weight)}
                                </Text>
                            </Text>
                        )}
                        <Text
                            size={14}
                            weight="bold"
                            className={classes.inlineText}
                            strikethrough={hasSalePrice}
                        >
                            {`$${prices.price}`}
                            <Text component="span" weight="normal">
                                {parseProductWeightUnit(prices.weight)}
                            </Text>
                        </Text>
                    </div>
                </MediaQuery>
            </div>
        </Card>
    );
};

export default ProductListItem;
