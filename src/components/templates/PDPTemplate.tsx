import * as React from 'react';
import {
    Card,
    Container,
    createStyles,
    Image,
    Button,
    Text,
} from '@mantine/core';
import CategoryBadge from '../atoms/CategoryBadge';
import { mapProductImage, getProductPrices } from '../../lib/helpers';
import { Product } from '../../lib/interfaces';

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
        margin: 0,
        fontSize: '2rem',
    },
    button: {
        textTransform: 'uppercase',
        letterSpacing: '0.1rem',
        fontSize: '0.8rem',
    },
}));

interface Props {
    product: Product;
}

const PDPTemplate: React.FC<Props> = ({ product }) => {
    const { classes } = useStyles();
    const prices = getProductPrices(product);
    const hasSalePrice = parseInt(prices.promoPrice) > 0;

    return (
        <Container>
            <Card>
                <div className={classes.root}>
                    <div className={classes.imageContainer}>
                        <Image
                            src={mapProductImage(product)}
                            imageProps={{ srcSet: mapProductImage(product) }}
                            alt="Product image"
                            height={250}
                            width={250}
                        />
                    </div>
                    <div className={classes.infoContainer}>
                        <CategoryBadge categoryType={product.categoryType} />
                        <Text component="h1" className={classes.strain}>
                            {product.strain}
                        </Text>
                        {product.url && (
                            <Button
                                variant="light"
                                className={classes.button}
                                component="a"
                                href={product.url}
                                target="_blank"
                            >
                                Purchase At {product.dispensaryName} -{' '}
                                {product.dispensaryLocation}
                            </Button>
                        )}
                        {hasSalePrice && (
                            <Text weight="bold">
                                {`$${prices.promoPrice}`}
                                <Text
                                    component="span"
                                    weight="normal"
                                >{` per ${prices.weight}`}</Text>
                            </Text>
                        )}
                        <Text strikethrough={hasSalePrice} weight="bold">
                            {`$${prices.price}`}
                            <Text
                                component="span"
                                weight="normal"
                            >{` per ${prices.weight}`}</Text>
                        </Text>

                        <Text component="h2">Product Description:</Text>
                        <Text>{product.description}</Text>
                    </div>
                </div>
            </Card>
        </Container>
    );
};

export default PDPTemplate;