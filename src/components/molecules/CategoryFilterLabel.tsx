import * as React from 'react';
import { createStyles, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    dispensaryLabel: {
        // borderBottom: '1px solid #ccc',
        width: '100%',
    },
}));

interface Props {
    name: string;
    category: string;
}

const CategoryFilterLabel: React.FC<Props> = ({ name, category }) => {
    const { classes } = useStyles();
    const isDispensary = category === 'Dispensary';
    const nameAndLocation = isDispensary ? name.split(' - ') : '';

    return (
        <div className={classes.root}>
            {nameAndLocation ? (
                <div className={classes.dispensaryLabel}>
                    <Text weight="bold">{nameAndLocation[0]}</Text>
                    <Text>{nameAndLocation[1]}</Text>
                </div>
            ) : (
                name
            )}
        </div>
    );
};

export default CategoryFilterLabel;
