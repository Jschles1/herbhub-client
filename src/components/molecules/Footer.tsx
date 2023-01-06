import * as React from 'react';
import { Footer as MantineFooter, createStyles, Text } from '@mantine/core';

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
    },
}));

interface Props {
    hidden: boolean;
}

const Footer: React.FC<Props> = ({ hidden }) => {
    const { classes } = useStyles();
    return hidden ? null : (
        <MantineFooter height={90}>
            <div className={classes.root}>
                <div>&copy; {new Date().getFullYear()} HerbHub</div>
                <div>
                    <Text weight="bold">Disclaimer:</Text>
                    <Text italic>
                        HerbHub does not vet or endorse any retailer listed on
                        this site. Also, retailers' web sites can change at any
                        time and products listed may be sold out at the time of
                        listing. This could have a negative effect on HerbHub's
                        ability to obtain accurate (or any) information. HerbHub
                        is not responsible for inaccurate product information
                        displayed.
                    </Text>
                </div>
            </div>
        </MantineFooter>
    );
};

export default Footer;
