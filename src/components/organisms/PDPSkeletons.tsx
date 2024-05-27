import { Container, Skeleton, createStyles } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
    desktopRelatedProducts: {
        display: 'flex',
        gap: '1rem',
    },
    link: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: '1rem',
        display: 'block',
    },
}));

export default function PDPSkeletons() {
    const { classes } = useStyles();
    const isMobile = useMediaQuery('(max-width: 900px)');
    return (
        <Container>
            <Link href="/" className={classes.link}>
                &lt; Back
            </Link>
            <Skeleton height={550} />
            <br />
            <Skeleton height={24} />
            <br />
            {!isMobile ? (
                <div className={classes.desktopRelatedProducts}>
                    <Skeleton height={475} />
                    <Skeleton height={475} />
                    <Skeleton height={475} />
                </div>
            ) : (
                <Skeleton height={475} />
            )}
        </Container>
    );
}
