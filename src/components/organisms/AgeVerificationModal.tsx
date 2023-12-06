import * as React from 'react';
import { Modal, createStyles, Text, Button } from '@mantine/core';
import { set, get } from 'js-cookie';

const useStyles = createStyles((theme) => ({
    root: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: '3rem',
    },
    content: {
        padding: '3rem',
    },
    title: {
        marginBottom: '2rem',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1rem',
        gap: '1rem',
    },
}));

const AgeVerificationModal = () => {
    const { classes } = useStyles();
    const [open, setOpen] = React.useState(!get('verified'));

    const handleYesClick = () => {
        set('verified', 'true');
        setOpen(false);
    };

    return (
        <Modal
            opened={open}
            onClose={() => setOpen(false)}
            withCloseButton={false}
            closeOnEscape={false}
            closeOnClickOutside={false}
            className={classes.root}
            classNames={{
                body: classes.content,
            }}
            centered
        >
            <Text size="xl" className={classes.title}>
                Are you over 21?
            </Text>
            <div className={classes.buttonContainer}>
                <Button
                    color="gray"
                    variant="light"
                    size="lg"
                    component="a"
                    href="https://www.google.com"
                >
                    <Text size="lg">No</Text>
                </Button>
                <Button
                    color="green"
                    variant="light"
                    size="lg"
                    onClick={handleYesClick}
                >
                    <Text size="lg">Yes</Text>
                </Button>
            </div>
        </Modal>
    );
};

export default AgeVerificationModal;
