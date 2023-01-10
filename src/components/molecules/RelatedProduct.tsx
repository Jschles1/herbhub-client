import * as React from 'react';
import { createStyles, Text, Card, Image } from '@mantine/core';
import { Product } from '../../lib/interfaces';
import {
    mapProductImage,
    getProductUrl,
    getProductPrices,
} from '../../lib/helpers';
import ProductInfoBadges from './ProductInfoBadges';

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
        padding: '1rem',
    },
    topSpacing: {
        marginTop: theme.spacing.md,
        marginBottom: 0,
    },
}));

interface Props {
    product: Product;
}

const RelatedProduct: React.FC<Props> = ({ product }) => {
    const { classes } = useStyles();
    const productUrl = getProductUrl(product);
    const prices = getProductPrices(product);
    const hasSalePrice =
        parseInt(prices.promoPrice) > 0 &&
        parseInt(prices.promoPrice) !== parseInt(prices.price);
    const thcInfo = product.thc ? ` - THC: %${product.thc.toFixed(2)}` : '';
    const cbdInfo = product.cbd ? ` - CBD: %${product.cbd.toFixed(2)}` : '';

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
                width="100%"
                height="100%"
                pb="0.75rem"
                imageProps={{ srcSet: mapProductImage(product) }}
                alt={product.strain}
            />
            <ProductInfoBadges product={product} hasSalePrice={hasSalePrice} />
            <Text weight="bold" className={classes.topSpacing}>
                {product.strain}
            </Text>
            <Text className={classes.topSpacing}>{product.brand}</Text>
            <Text weight="bold" className={classes.topSpacing}>
                {hasSalePrice && (
                    <Text weight="bold" color="green" component="span">
                        {`$${prices.promoPrice} `}
                    </Text>
                )}
                <Text
                    component="span"
                    strikethrough={hasSalePrice}
                >{`$${prices.price}`}</Text>

                <Text
                    component="span"
                    weight="normal"
                >{` per ${prices.weight}`}</Text>
            </Text>
            <Text
                size={12}
                weight={300}
                className={classes.topSpacing}
                color="gray"
            >
                {product.strainType.toUpperCase() + thcInfo + cbdInfo}
            </Text>
        </Card>
    );
};

export default RelatedProduct;
