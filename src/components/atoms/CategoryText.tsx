import * as React from 'react';
import { Badge, createStyles, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    root: {
        fontSize: '0.8rem',
    },
}));

const CategoryBadge: React.FC<{ categoryType: string }> = ({
    categoryType,
}) => {
    const { classes } = useStyles();
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
        case 'vaporizer':
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
    const capitalizedCategoryType =
        categoryType.charAt(0).toUpperCase() + categoryType.slice(1);
    return (
        <Text color={color} className={classes.root}>
            {capitalizedCategoryType}
        </Text>
    );
};

export default React.memo(CategoryBadge);
