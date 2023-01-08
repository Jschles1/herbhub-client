import * as React from 'react';
import { Badge, createStyles } from '@mantine/core';
import CategoryBadge from '../atoms/CategoryBadge';
import type { Product } from '../../lib/interfaces';

const useStyles = createStyles((theme) => ({
    badgeContainer: {
        height: '25px',
    },
    location: {
        alignSelf: 'end',
    },
}));

interface Props {
    product: Product;
    hasSalePrice: boolean;
}

const ProductInfoBadges: React.FC<Props> = ({ product, hasSalePrice }) => {
    const { classes } = useStyles();
    return (
        <div className={classes.badgeContainer}>
            {hasSalePrice && <Badge color="green">Sale</Badge>}
            <CategoryBadge categoryType={product.categoryType} />
            <Badge color="gray" className={classes.location}>
                {product.dispensaryName} - {product.dispensaryLocation}
            </Badge>
        </div>
    );
};

export default ProductInfoBadges;
