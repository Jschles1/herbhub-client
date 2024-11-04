import * as React from 'react';
import { Card, Container, createStyles, Button, Text } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import {
    mapProductImage,
    getProductPrices,
    parseProductWeightUnit,
} from '../../lib/helpers';
import { Product } from '../../lib/interfaces';
import RelatedProducts from '../organisms/RelatedProducts';
import ProductInfoBadges from '../molecules/ProductInfoBadges';
import PDPStrainInfo from '../molecules/PDPStrainInfo';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column',
        },
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        flexBasis: '30%',
        marginRight: theme.spacing.md,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginRight: 0,
        },
    },
    infoContainer: {
        flexBasis: '80%',
        alignSelf: 'flex-start',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginTop: '0.5rem',
        },
    },
    strain: {
        fontSize: '2rem',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            fontSize: '1.5rem',
        },
    },
    button: {
        textTransform: 'uppercase',
        // letterSpacing: '0.1rem',
        fontSize: '0.8rem',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            fontSize: '0.6rem',
            lineHeight: '1rem',
            paddingTop: '0.25rem',
            paddingBottom: '0.25rem',
            height: '42px',
        },
    },
    topSpacing: {
        marginTop: theme.spacing.sm,
        marginBottom: 0,
    },
    link: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: '1rem',
        display: 'block',
        textDecoration: 'none',
        '&:hover': {
            color: theme.colors.green[5],
        },
        transition: 'color 0.1s ease',
    },
    location: {
        // fontSize: '1.2rem',
        fontStyle: 'italic',
    },
}));

interface Props {
    product: Product;
    relatedProducts: Product[];
}

const PDPTemplate: React.FC<Props> = ({ product, relatedProducts }) => {
    const { classes, cx } = useStyles();
    const isMobile = useMediaQuery('(max-width: 900px)');
    const prices = getProductPrices(product);
    const hasSalePrice = parseInt(prices.promoPrice) > 0;
    const imageDimensions = isMobile ? 300 : 400;

    return (
        <Container>
            <Link href="/" className={classes.link}>
                ← Back
            </Link>
            <Card withBorder shadow="sm">
                <div className={classes.root}>
                    <div className={classes.imageContainer}>
                        <Image
                            src={mapProductImage(product)}
                            priority
                            alt={product.strain}
                            height={imageDimensions}
                            width={imageDimensions}
                        />
                    </div>
                    <div className={classes.infoContainer}>
                        <ProductInfoBadges
                            product={product}
                            hasSalePrice={hasSalePrice}
                        />
                        <Text
                            component="h1"
                            className={cx(classes.strain, classes.topSpacing)}
                        >
                            {product.strain}
                        </Text>
                        <Text className={classes.topSpacing}>
                            {product.brand}
                        </Text>
                        <Text
                            className={cx(classes.topSpacing, classes.location)}
                        >
                            {product.dispensaryName} -{' '}
                            {product.dispensaryLocation}
                        </Text>
                        {product.url && (
                            <Button
                                color="green"
                                variant="light"
                                className={cx(
                                    classes.button,
                                    classes.topSpacing,
                                )}
                                component="a"
                                href={product.url}
                                target="_blank"
                            >
                                Purchase
                            </Button>
                        )}
                        <Text weight="bold" className={classes.topSpacing}>
                            {hasSalePrice && (
                                <Text
                                    weight="bold"
                                    color="green"
                                    component="span"
                                >
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

                        <PDPStrainInfo product={product} />

                        <Text component="h2" className={classes.topSpacing}>
                            Product Description:
                        </Text>
                        <Text
                            className={classes.topSpacing}
                            dangerouslySetInnerHTML={{
                                // Description already sanitized from server
                                __html: product.description,
                            }}
                        />
                    </div>
                </div>
            </Card>
            <br />
            <RelatedProducts products={relatedProducts} />
        </Container>
    );
};

export default PDPTemplate;
