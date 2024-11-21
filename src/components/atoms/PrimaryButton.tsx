import * as React from 'react';
import { Button, createStyles, ButtonProps } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    button: {
        textTransform: 'uppercase',
    },
}));

type PrimaryButtonProps = ButtonProps & {
    component?: any;
    href?: string;
    target?: string;
} & React.ComponentPropsWithoutRef<'button'>;

const PrimaryButton = (props: PrimaryButtonProps) => {
    const { classes, cx } = useStyles();
    const { className, ...otherProps } = props;
    return (
        <Button
            color="green"
            variant="light"
            {...otherProps}
            className={cx(classes.button, className)}
        >
            {props.children}
        </Button>
    );
};

export default PrimaryButton;
