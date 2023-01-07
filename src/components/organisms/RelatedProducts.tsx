import * as React from 'react';
import { createStyles, Card, Text } from '@mantine/core';
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

const useStyles = createStyles((theme) => ({}));

interface Props {
    products: Product[];
}

const RelatedProducts: React.FC<Props> = ({ products }) => {
    const { classes } = useStyles();

    return (
        <>
            <Text component="h3">Related Products</Text>
            <Carousel ssr responsive={responsive} showDots centerMode={false}>
                {products.map((product) => (
                    <RelatedProduct key={product.id} product={product} />
                ))}
            </Carousel>
        </>
    );
};

export default RelatedProducts;
