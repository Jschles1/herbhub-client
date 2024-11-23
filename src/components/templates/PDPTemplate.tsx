import * as React from 'react';
import { Card, Container, createStyles, Button, Text } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import {
    mapProductImage,
    getProductPrices,
    parseProductWeightUnit,
} from '../../lib/helpers';
import { Dispensary, Product } from '../../lib/interfaces';
import RelatedProducts from '../organisms/RelatedProducts';
import PDPStrainInfo from '../molecules/PDPStrainInfo';
import { useMediaQuery } from '@mantine/hooks';
import ProductLabs from '../organisms/ProductLabs';
import DispensaryInfo from '../organisms/DispensaryInfo';
import PrimaryButton from '../atoms/PrimaryButton';

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'flex-start',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column',
        },
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        flexBasis: '20%',
        marginRight: '2rem',
        borderRadius: '4px',
        border: '1px solid #dee2e6',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginRight: 0,
        },
    },
    infoContainer: {
        flexBasis: '80%',
        alignSelf: 'flex-start',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginTop: '0.5rem',
            width: '100%',
        },
    },
    strain: {
        fontSize: '2rem',
        margin: 0,
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            fontSize: '1.5rem',
        },
    },
    button: {
        textTransform: 'uppercase',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            // lineHeight: '1rem',
            // paddingTop: '0.25rem',
            // paddingBottom: '0.25rem',
            // height: '42px',
            width: '100%',
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
        fontWeight: 'bold',
        color: theme.colors.gray[6],
    },
    brandText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: theme.colors.gray[6],
    },
    description: {
        fontSize: '0.8rem',
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: '2rem',
    },
}));

interface Props {
    product: Product;
    relatedProducts: Product[];
    dispensary: Dispensary;
    splitMenus: boolean;
}

const PDPTemplate: React.FC<Props> = ({
    product,
    relatedProducts,
    dispensary,
    splitMenus,
}) => {
    const { classes, cx } = useStyles();
    const isMobile = useMediaQuery('(max-width: 900px)');
    const prices = getProductPrices(product);
    const hasSalePrice = parseInt(prices.promoPrice) > 0;
    const hasImage = !!product.image;
    const imageDimensions = isMobile ? 200 : 250;

    return (
        <Container>
            <Link href="/" className={classes.link}>
                ← Back
            </Link>
            <div className={classes.root}>
                <div
                    className={classes.imageContainer}
                    style={!hasImage ? { border: 'none', padding: '4rem' } : {}}
                >
                    <Image
                        src={mapProductImage(product)}
                        priority
                        alt={product.strain}
                        height={imageDimensions}
                        width={imageDimensions}
                        style={{ margin: '0 auto', display: 'block' }}
                    />
                </div>
                <div className={classes.infoContainer}>
                    <Text className={classes.brandText}>{product.brand}</Text>
                    <Text component="h1" className={cx(classes.strain)}>
                        {product.strain}
                    </Text>

                    <Text className={cx(classes.location)}>
                        {product.dispensaryName} - {product.dispensaryLocation}
                    </Text>

                    <Text weight="bold">
                        {hasSalePrice && (
                            <Text
                                weight="bold"
                                color="green"
                                className={classes.priceText}
                                component="span"
                            >
                                {`$${prices.promoPrice} `}
                            </Text>
                        )}
                        <Text
                            component="span"
                            className={classes.priceText}
                            strikethrough={hasSalePrice}
                        >{`$${prices.price}`}</Text>

                        <Text component="span" weight="normal">
                            {parseProductWeightUnit(prices.weight)}
                        </Text>
                    </Text>

                    {product.url && (
                        <PrimaryButton
                            className={cx(classes.button, classes.topSpacing)}
                            component="a"
                            href={product.url}
                            target="_blank"
                        >
                            Purchase At Dispensary
                        </PrimaryButton>
                    )}

                    <PDPStrainInfo product={product} />

                    {product.description && (
                        <Text
                            className={cx(
                                classes.topSpacing,
                                classes.description,
                            )}
                            dangerouslySetInnerHTML={{
                                // Description already sanitized from server
                                __html: product.description,
                            }}
                        />
                    )}

                    <ProductLabs product={product} />
                </div>
            </div>
            <br />
            <DispensaryInfo dispensary={dispensary} splitMenus={splitMenus} />
            <br />
            <RelatedProducts products={relatedProducts} />
        </Container>
    );
};

export default PDPTemplate;
