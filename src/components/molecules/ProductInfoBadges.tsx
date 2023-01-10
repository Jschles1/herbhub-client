import * as React from 'react';
import { useRouter } from 'next/router';
import { Badge, createStyles } from '@mantine/core';
import CategoryBadge from '../atoms/CategoryBadge';
import type { Product } from '../../lib/interfaces';

const useStyles = createStyles(() => ({
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
    const router = useRouter();
    const showLocation = router.pathname === '/';
    return (
        <div>
            {hasSalePrice && <Badge color="green">Sale</Badge>}
            <CategoryBadge categoryType={product.categoryType} />
            {showLocation && (
                <Badge color="gray" className={classes.location}>
                    {product.dispensaryName} - {product.dispensaryLocation}
                </Badge>
            )}
        </div>
    );
};

export default ProductInfoBadges;
