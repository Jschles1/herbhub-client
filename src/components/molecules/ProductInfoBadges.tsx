import * as React from 'react';
import { useRouter } from 'next/router';
import { Badge, MediaQuery, createStyles } from '@mantine/core';
import CategoryBadge from '../atoms/CategoryText';
import type { Product } from '../../lib/interfaces';
import { getDisplayDispensaryName } from '../../lib/helpers';

const useStyles = createStyles((theme) => ({
    root: {
        marginLeft: '0.8rem',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            marginLeft: '0',
            width: '100%',
        },
    },
    location: {
        alignSelf: 'end',
        fontSize: '0.8rem',
        color: theme.colors.gray[6],
        marginTop: '0.3rem',
        display: 'none',
    },
    locationMobile: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '98%',
    },
}));

interface Props {
    product: Product;
    hasSalePrice: boolean;
}

const ProductInfoBadges: React.FC<Props> = ({ product, hasSalePrice }) => {
    const { classes } = useStyles();
    const router = useRouter();
    const showLocation = router.pathname === '/menu';
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
                            <div className={classes.locationMobile}>
                                {dispensaryName}
                            </div>
                            <div>{product.dispensaryLocation}</div>
                        </div>
                    </MediaQuery>
                </>
            )}
        </div>
    );
};

export default ProductInfoBadges;
