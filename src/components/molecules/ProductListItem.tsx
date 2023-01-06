import {
    Card,
    createStyles,
    Text,
    Image,
    Badge,
    MediaQuery,
} from '@mantine/core';
import * as React from 'react';
import CategoryBadge from '../atoms/CategoryBadge';
import { Product } from '../../lib/interfaces';
import { mapProductImage, getProductPrices } from '../../lib/helpers';

const getProductUrl = (product: Product) => {
    const dispensarySlug = encodeURIComponent(
        product.dispensaryName.toLowerCase() +
            '-' +
            product.dispensaryLocation.toLowerCase(),
    );
    const productSlug = encodeURIComponent(
        product.strain.toLowerCase().replaceAll(' ', '-'),
    );
    return `/${dispensarySlug}/${productSlug}`;
};

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
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        margin: '0 auto',
        // minWidth: '90%',
        width: '90%',
    },
    inlineText: {
        marginRight: '0.5rem',
        display: 'inline-block',
    },
    productTextContainer: {
        marginLeft: '0.5rem',
    },
    productText: {
        marginTop: '0.5rem',
    },
    badge: {
        height: '25px',
    },
    imageContainer: {
        padding: '0.25rem',
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
    },
}));

interface Props {
    product: Product;
}

const ProductListItem: React.FC<Props> = ({ product }) => {
    const { classes } = useStyles();

    const prices = getProductPrices(product);
    const productUrl = getProductUrl(product);
    const hasSalePrice =
        parseInt(prices.promoPrice) > 0 &&
        parseInt(prices.promoPrice) !== parseInt(prices.price);
    const thcInfo = product.thc ? ` - THC: %${product.thc.toFixed(2)}` : '';
    const cbdInfo = product.cbd ? ` - CBD: %${product.cbd.toFixed(2)}` : '';

    if (product.weight.length > 1) {
        console.log({ weight: product.weight });
    }

    return (
        <Card
            component="a"
            href={productUrl}
            className={classes.root}
            shadow="sm"
            withBorder
        >
            <Image
                src={mapProductImage(product)}
                width={100}
                height={100}
                pb="0.75rem"
                imageProps={{ srcSet: mapProductImage(product) }}
            />

            <div className={classes.info}>
                <div className={classes.topRow}>
                    <div className={classes.badge}>
                        {hasSalePrice && <Badge color="green">Sale</Badge>}
                        <CategoryBadge categoryType={product.categoryType} />
                        <Badge color="gray" className={classes.location}>
                            {product.dispensaryName},{' '}
                            {product.dispensaryLocation}
                        </Badge>
                    </div>
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
                                    <Text
                                        component="span"
                                        weight="normal"
                                    >{` per ${prices.weight}`}</Text>
                                </Text>
                            )}
                            <Text
                                size={14}
                                weight="bold"
                                className={classes.inlineText}
                                strikethrough={hasSalePrice}
                            >
                                {`$${prices.price}`}
                                <Text
                                    component="span"
                                    weight="normal"
                                >{` per ${prices.weight}`}</Text>
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
                                <Text
                                    component="span"
                                    weight="normal"
                                >{` per ${prices.weight}`}</Text>
                            </Text>
                        )}
                        <Text
                            size={14}
                            weight="bold"
                            className={classes.inlineText}
                            strikethrough={hasSalePrice}
                        >
                            {`$${prices.price}`}
                            <Text
                                component="span"
                                weight="normal"
                            >{` per ${prices.weight}`}</Text>
                        </Text>
                    </div>
                </MediaQuery>
            </div>
        </Card>
    );
};

export default ProductListItem;
