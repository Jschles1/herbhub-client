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
        textDecoration: 'none',
        '&:hover': {
            color: theme.colors.green[5],
        },
        transition: 'color 0.1s ease',
    },
}));

export default function PDPSkeletons() {
    const { classes } = useStyles();
    const isMobile = useMediaQuery('(max-width: 900px)');
    return (
        <Container>
            <Link href="/menu" className={classes.link}>
                ← Back
            </Link>
            <Skeleton height={550} />
            <br />
            <Skeleton height={24} />
            <br />
            {!isMobile ? (
                <div className={classes.desktopRelatedProducts}>
                    <Skeleton
                        height={475}
                        animate
                        sx={{ backgroundColor: '#fff' }}
                    />
                    <Skeleton
                        height={475}
                        animate
                        sx={{ backgroundColor: '#fff' }}
                    />
                    <Skeleton
                        height={475}
                        animate
                        sx={{ backgroundColor: '#fff' }}
                    />
                </div>
            ) : (
                <Skeleton height={475} />
            )}
        </Container>
    );
}
