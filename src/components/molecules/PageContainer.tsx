import * as React from 'react';
import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
    root: {
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '0',
        height: '100%',
    },
}));

interface Props {
    children: React.ReactNode;
}

const PageContainer: React.FC<Props> = ({ children }) => {
    const { classes } = useStyles();
    return <div className={classes.root}>{children}</div>;
};

export default React.memo(PageContainer);
