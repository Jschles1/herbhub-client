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
            <Text weight="bold">{product.strain}</Text>
        </Card>
    );
};

export default RelatedProduct;
