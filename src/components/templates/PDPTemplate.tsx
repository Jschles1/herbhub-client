import * as React from 'react';
import {
    Card,
    Container,
    createStyles,
    Image,
    Button,
    Text,
} from '@mantine/core';
import { mapProductImage, getProductPrices } from '../../lib/helpers';
import { Product } from '../../lib/interfaces';
import RelatedProducts from '../organisms/RelatedProducts';
import ProductInfoBadges from '../molecules/ProductInfoBadges';

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        flexBasis: '30%',
        marginRight: theme.spacing.md,
    },
    infoContainer: {
        flexBasis: '80%',
        alignSelf: 'flex-start',
    },
    strain: {
        fontSize: '2rem',
    },
    button: {
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        fontSize: '0.8rem',
    },
    topSpacing: {
        marginTop: theme.spacing.md,
        marginBottom: 0,
    },
}));

interface Props {
    product: Product;
    relatedProducts: Product[];
}

const PDPTemplate: React.FC<Props> = ({ product, relatedProducts }) => {
    const { classes, cx } = useStyles();
    const prices = getProductPrices(product);
    const hasSalePrice = parseInt(prices.promoPrice) > 0;

    return (
        <Container>
            <Card withBorder shadow="sm">
                <div className={classes.root}>
                    <div className={classes.imageContainer}>
                        <Image
                            src={mapProductImage(product)}
                            imageProps={{ srcSet: mapProductImage(product) }}
                            alt={product.strain}
                            height={400}
                            width={400}
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
                        {product.url && (
                            <Button
                                variant="light"
                                className={cx(
                                    classes.button,
                                    classes.topSpacing,
                                )}
                                component="a"
                                href={product.url}
                                target="_blank"
                            >
                                Purchase At {product.dispensaryName} -{' '}
                                {product.dispensaryLocation}
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

                            <Text
                                component="span"
                                weight="normal"
                            >{` per ${prices.weight}`}</Text>
                        </Text>

                        <Text component="h2" className={classes.topSpacing}>
                            Product Description:
                        </Text>
                        <Text
                            className={classes.topSpacing}
                            dangerouslySetInnerHTML={{
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
