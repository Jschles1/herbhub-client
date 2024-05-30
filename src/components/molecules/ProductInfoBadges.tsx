import * as React from 'react';
import { useRouter } from 'next/router';
import { Badge, createStyles } from '@mantine/core';
import CategoryBadge from '../atoms/CategoryBadge';
import type { Product } from '../../lib/interfaces';
import { getDisplayDispensaryName } from '../../lib/helpers';

const useStyles = createStyles((theme) => ({
    root: {
        marginLeft: '0.5rem',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginLeft: '0',
        },
    },
    location: {
        alignSelf: 'end',
        fontSize: '0.8rem',
        color: 'gray',
        marginTop: '0.5rem',
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
    const dispensaryName = getDisplayDispensaryName(product.dispensaryName);
    return (
        <div className={classes.root}>
            {hasSalePrice && <Badge color="green">Sale</Badge>}
            <CategoryBadge categoryType={product.categoryType} />
            {showLocation && (
                <div className={classes.location}>
                    {dispensaryName} - {product.dispensaryLocation}
                </div>
            )}
        </div>
    );
};

export default ProductInfoBadges;
