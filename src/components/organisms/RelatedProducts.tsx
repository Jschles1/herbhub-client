import * as React from 'react';
import { createStyles, Text } from '@mantine/core';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Product } from '../../lib/interfaces';
import RelatedProduct from '../molecules/RelatedProduct';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3,
        slidesToSlide: 3,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 600 },
        items: 3,
        slidesToSlide: 3,
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

const useStyles = createStyles((theme) => ({
    item: {
        padding: '0.5rem',
    },
    location: {
        textTransform: 'capitalize',
    },
}));

interface Props {
    products: Product[];
}

const RelatedProducts: React.FC<Props> = ({ products }) => {
    const { classes } = useStyles();

    if (!products.length) return null;

    const location = `${products[0].dispensaryName} - ${products[0].dispensaryLocation}:`;

    return (
        <>
            <Text component="h3">
                Related Products from{' '}
                <Text component="span" className={classes.location}>
                    {location}
                </Text>
            </Text>
            <Carousel
                ssr
                responsive={responsive}
                centerMode={false}
                itemClass={classes.item}
            >
                {products.map((product) => (
                    <RelatedProduct key={product.id} product={product} />
                ))}
            </Carousel>
        </>
    );
};

export default RelatedProducts;
