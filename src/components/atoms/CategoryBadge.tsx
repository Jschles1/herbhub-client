import * as React from 'react';
import { Badge } from '@mantine/core';

const CategoryBadge: React.FC<{ categoryType: string }> = ({
    categoryType,
}) => {
    let color;
    switch (categoryType) {
        case 'pre-rolls':
            color = 'red';
            break;
        case 'flower':
            color = 'lime';
            break;
        case 'cartridges':
            color = 'orange';
            break;
        case 'concentrates':
            color = 'indigo';
            break;
        case 'edibles':
            color = 'cyan';
            break;
        case 'topical':
            color = 'grape';
            break;
        case 'extracts':
            color = 'yellow';
            break;
        case 'tinctures':
            color = 'violet';
            break;
    }
    return <Badge color={color}>{categoryType}</Badge>;
};

export default React.memo(CategoryBadge);
