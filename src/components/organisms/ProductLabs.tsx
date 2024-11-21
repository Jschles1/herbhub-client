import { Accordion, createStyles } from '@mantine/core';
import { Product } from '../../lib/interfaces';
import React from 'react';
import Terpenes from '../molecules/Terpenes';
import Cannabinoids from '../molecules/Cannabinoids';

const useStyles = createStyles((theme) => ({
    root: {
        marginTop: '2rem',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            marginBottom: '2.5rem',
        },
    },
}));

interface Props {
    product: Product;
}

const ProductLabs: React.FC<Props> = ({ product }) => {
    const { classes } = useStyles();

    return (
        <>
            <Accordion
                defaultValue={['terpenes', 'cannabinoids']}
                className={classes.root}
                multiple
            >
                <Terpenes product={product} />
                <Cannabinoids product={product} />
            </Accordion>
        </>
    );
};

export default ProductLabs;
