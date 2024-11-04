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
            <Badge color="gray">{product.strainType}</Badge>
            {!!product.thcPercent && (
                <Badge color="gray">THC: {product.thcPercent}%</Badge>
            )}
            {!!product.cbdPercent && (
                <Badge color="gray">CBD: {product.cbdPercent}%</Badge>
            )}
            {!!product.thcContent && (
                <Badge color="gray">THC: {product.thcContent}mg</Badge>
            )}
            {!!product.cbdContent && (
                <Badge color="gray">CBD: {product.cbdContent}mg</Badge>
            )}
        </div>
    );
};

export default PDPStrainInfo;
