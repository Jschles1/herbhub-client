import * as React from 'react';
import { useRouter } from 'next/router';
import { Badge, MediaQuery, createStyles } from '@mantine/core';
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
        display: 'none',
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
            <CategoryBadge categoryType={product.categoryType} />
            {showLocation && (
                <>
                    <MediaQuery largerThan="md" styles={{ display: 'block' }}>
                        <div className={classes.location}>
                            {dispensaryName} - {product.dispensaryLocation}
                        </div>
                    </MediaQuery>
                    <MediaQuery smallerThan="md" styles={{ display: 'block' }}>
                        <div className={classes.location}>
                            <div>{dispensaryName}</div>
                            <div>{product.dispensaryLocation}</div>
                        </div>
                    </MediaQuery>
                </>
            )}
        </div>
    );
};

export default ProductInfoBadges;
