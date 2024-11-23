import * as React from 'react';
import { createStyles, Badge } from '@mantine/core';
import { Product } from '../../lib/interfaces';

const useStyles = createStyles(() => ({
    root: {
        marginTop: '1rem',
        marginBottom: '1rem',
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
    },
    label: {
        fontWeight: 'bold',
    },
    badge: {
        // marginBottom: '0.5rem',
        paddingBottom: '1rem',
        paddingTop: '1rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        fontWeight: 'normal',
        color: 'black',
        fontSize: '0.8rem',
    },
}));

interface Props {
    product: Product;
}

const PDPStrainInfo: React.FC<Props> = ({ product }) => {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
            <Badge color="gray" classNames={{ root: classes.badge }}>
                <span className={classes.label}>Strain Prevalence: </span>
                {product.strainType}
            </Badge>
            {!!product.thcPercent && (
                <Badge color="gray" classNames={{ root: classes.badge }}>
                    <span className={classes.label}>THC: </span>
                    {product.thcPercent}%
                </Badge>
            )}
            {!!product.cbdPercent && (
                <Badge color="gray" classNames={{ root: classes.badge }}>
                    <span className={classes.label}>CBD: </span>
                    {product.cbdPercent}%
                </Badge>
            )}
            {!!product.thcContent && (
                <Badge color="gray" classNames={{ root: classes.badge }}>
                    <span className={classes.label}>THC: </span>
                    {product.thcContent}mg
                </Badge>
            )}
            {!!product.cbdContent && (
                <Badge color="gray" classNames={{ root: classes.badge }}>
                    <span className={classes.label}>CBD: </span>
                    {product.cbdContent}mg
                </Badge>
            )}
        </div>
    );
};

export default PDPStrainInfo;
