import * as React from 'react';
import { createStyles, Text, Card } from '@mantine/core';
import Image from 'next/image';
import { Product } from '../../lib/interfaces';
import {
    mapProductImage,
    getProductUrl,
    getProductPrices,
    parseProductWeightUnit,
} from '../../lib/helpers';
import ProductInfoBadges from './ProductInfoBadges';
import CategoryText from '../atoms/CategoryText';

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-around',
        padding: '1rem',
        flex: 1,
    },
    topSpacing: {
        marginTop: theme.spacing.sm,
        marginBottom: 0,
    },
    image: {
        // position: 'relative',
        marginBottom: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #dee2e6',
    },
    imageContainer: {
        position: 'relative',
    },
    saleTag: {
        position: 'absolute',
        bottom: '0.5rem',
        right: 0,
        paddingLeft: '0.4rem',
        paddingRight: '0.4rem',
        paddingTop: '0.1rem',
        paddingBottom: '0.1rem',
        backgroundColor: 'green',
        borderTopLeftRadius: '4px',
        [`@media (min-width: ${theme.breakpoints.md}px)`]: {
            // bottom: '0.5px',
        },
    },
    strainTypeText: {
        color: theme.colors.gray[6],
    },
    stockImage: {
        border: 'none',
        padding: '4rem 3rem',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            padding: '3rem 3rem',
        },
    },
}));

interface Props {
    product: Product;
}

const RelatedProduct: React.FC<Props> = ({ product }) => {
    const { classes, cx } = useStyles();
    const ref = React.useRef<HTMLAnchorElement>(null);
    const [width, setWidth] = React.useState(0);
    const productUrl = getProductUrl(product);
    const prices = getProductPrices(product);
    const hasSalePrice =
        parseInt(prices.promoPrice) > 0 &&
        parseInt(prices.promoPrice) !== parseInt(prices.price);
    const hasImage = !!product.image;
    const thcInfo = product.thcPercent
        ? ` - THC: ${product.thcPercent.toFixed(2)}%`
        : '';
    const cbdInfo = product.cbdPercent
        ? ` - CBD: %${product.cbdPercent.toFixed(2)}`
        : '';

    React.useEffect(() => {
        if (ref.current) {
            setWidth(ref.current?.offsetWidth - 32);
        }
    }, [ref]);

    return (
        <Card
            component="a"
            href={productUrl}
            className={classes.root}
            shadow="sm"
            withBorder
            ref={ref}
        >
            <div className={classes.imageContainer}>
                {hasSalePrice && (
                    <div className={classes.saleTag}>
                        <Text size={16} color="white">
                            Sale!
                        </Text>
                    </div>
                )}
                <Image
                    src={mapProductImage(product)}
                    height={290}
                    width={width}
                    alt={product.strain}
                    className={cx(
                        classes.image,
                        !hasImage && classes.stockImage,
                    )}
                    priority
                />
            </div>
            <CategoryText categoryType={product.categoryType} />
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

                <Text component="span" weight="normal">
                    {parseProductWeightUnit(prices.weight)}
                </Text>
            </Text>
            <Text
                size={12}
                weight={300}
                className={cx(classes.topSpacing, classes.strainTypeText)}
            >
                {product.strainType.toUpperCase() + thcInfo + cbdInfo}
            </Text>
        </Card>
    );
};

export default RelatedProduct;
