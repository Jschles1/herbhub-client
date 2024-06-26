import * as React from 'react';
import { Badge } from '@mantine/core';

const CategoryBadge: React.FC<{ categoryType: string }> = ({
    categoryType,
}) => {
    let color;
    switch (categoryType.toLowerCase()) {
        case 'pre-rolls':
        case 'pre_rolls':
        case 'pre-roll':
        case 'preroll':
            color = 'red';
            break;
        case 'flower':
            color = 'lime';
            break;
        case 'cartridges':
        case 'cartridge':
        case 'vape':
        case 'vaporizers':
            color = 'orange';
            break;
        case 'concentrates':
        case 'concentrate':
            color = 'indigo';
            break;
        case 'edibles':
        case 'edible':
            color = 'cyan';
            break;
        case 'topical':
            color = 'grape';
            break;
        case 'extracts':
        case 'extract':
            color = 'yellow';
            break;
        case 'tinctures':
            color = 'violet';
            break;
        default:
            break;
    }
    return <Badge color={color}>{categoryType}</Badge>;
};

export default React.memo(CategoryBadge);
