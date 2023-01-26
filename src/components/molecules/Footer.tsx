import * as React from 'react';
import { Footer as MantineFooter, createStyles, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        margin: '0 auto',
        maxWidth: '1440px',
        alignItems: 'center',
        fontSize: '0.8rem',
        '& > div:first-of-type': {
            flexBasis: '70%',
        },
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            padding: '1rem',
            fontSize: '0.7rem',
            display: 'block',
        },
    },
    copy: {
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            marginBottom: '0.8rem',
        },
    },
}));

interface Props {
    hidden: boolean;
}

const Footer: React.FC<Props> = ({ hidden }) => {
    const { classes } = useStyles();
    const isDesktop = useMediaQuery('(min-width: 1200px)');

    return hidden ? null : (
        <MantineFooter height={isDesktop ? 90 : 'auto'} px="sm">
            <div className={classes.root}>
                <div className={classes.copy}>
                    &copy; {new Date().getFullYear()} John Schlesinger
                </div>
                <div>
                    <Text weight="bold">Disclaimer:</Text>
                    <Text italic>
                        HerbHub does not vet or endorse any retailer listed on
                        this site. Also, retailers&apos; web sites can change at
                        any time and products listed may be sold out at the time
                        of listing. This could have a negative effect on
                        HerbHub&apos;s ability to obtain accurate (or any)
                        information. HerbHub is not responsible for inaccurate
                        product information displayed.
                    </Text>
                </div>
            </div>
        </MantineFooter>
    );
};

export default React.memo(Footer);
