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
        // alignItems: 'flex-start',
        alignItems: 'center',
        transition: 'border ease 0.1s',
        position: 'relative',
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
        marginLeft: '0.8rem',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginLeft: '0',
        },
    },
    productText: {
        marginTop: '0.3rem',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            '-webkit-line-clamp': '2',
            '-webkit-box-orient': 'vertical',
        },
    },
    strainText: {
        marginTop: '0.2rem',
        marginBottom: '0.2rem',
    },
    strainTypeText: {
        color: theme.colors.gray[6],
    },
    badge: {
        height: '25px',
    },
    imageContainer: {
        borderRadius: '4px',
        border: '1px solid #dee2e6',
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
    saleTag: {
        position: 'absolute',
        bottom: '0.525rem',
        right: 0,
        paddingLeft: '0.4rem',
        paddingRight: '0.4rem',
        paddingTop: '0.1rem',
        paddingBottom: '0.1rem',
        backgroundColor: 'green',
        borderTopLeftRadius: '4px',
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            bottom: '0.5px',
        },
    },
}));

interface Props {
    product: Product;
}

const ProductListItem: React.FC<Props> = ({ product }) => {
    const { classes, cx } = useStyles();
    const isMobile = useMediaQuery('(max-width: 750px)');

    const prices = getProductPrices(product);
    const productUrl = getProductUrl(product);
    const hasSalePrice =
        parseInt(prices.promoPrice) > 0 &&
        parseInt(prices.promoPrice) !== parseInt(prices.price);
    const hasImage = !!product.image;
    const thcInfo = product.thcPercent
        ? ` - THC: ${product.thcPercent.toFixed(2)}%`
        : product.thcContent
        ? ` - THC: ${product.thcContent}mg`
        : '';
    const cbdInfo = product.cbdPercent
        ? ` - CBD: ${product.cbdPercent.toFixed(2)}%`
        : product.cbdContent
        ? ` - CBD: ${product.cbdContent}mg`
        : '';
    const dimensions = isMobile
        ? { width: 146, height: 140 }
        : { width: 110, height: 110 };

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
                    <div className={classes.saleTag}>
                        <Text size={13} color="white">
                            Sale!
                        </Text>
                    </div>
                )}
                <Image
                    src={mapProductImage(product)}
                    width={dimensions.width}
                    height={dimensions.height}
                    priority
                    className={classes.imageContainer}
                    alt={product.strain}
                    unoptimized
                    style={
                        !hasImage ? { border: 'none', padding: '0.5rem' } : {}
                    }
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
                        className={cx(classes.productText, classes.strainText)}
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
                        className={cx(
                            classes.productText,
                            classes.strainTypeText,
                        )}
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
