import * as React from 'react';
import { createStyles, Badge } from '@mantine/core';
import { Product } from '../../lib/interfaces';

const useStyles = createStyles(() => ({
    root: {
        marginTop: '0.5rem',
    },
}));

interface Props {
    product: Product;
}

const PDPStrainInfo: React.FC<Props> = ({ product }) => {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
            <Badge color="gray">Type: {product.strainType}</Badge>
            {!!product.thc && (
                <Badge color="gray">THC: {product.thc.toFixed(2)}%</Badge>
            )}
            {!!product.cbd && (
                <Badge color="gray">CBD: {product.cbd.toFixed(2)}%</Badge>
            )}
        </div>
    );
};

export default PDPStrainInfo;
