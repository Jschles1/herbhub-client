import * as React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { createStyles } from '@mantine/core';
import Link from 'next/link';
import PageContainer from '../components/molecules/PageContainer';

const useStyles = createStyles((theme) => ({
    header: {
        color: theme.colors.green[5],
        marginTop: 0,
    },
    root: {},
}));

const FAQ: NextPage = () => {
    const { classes } = useStyles();
    return (
        <>
            <Head>
                <title>HerbHub NJ</title>
            </Head>
            <PageContainer>
                <h1 className={classes.header}>Frequently Asked Questions</h1>
                <div className={classes.root}>
                    <h2>What is Jersey Herbhub?</h2>
                    <p>
                        Jersey Herbhub is a website that allows you to search
                        and find cannabis products currently being sold in New
                        Jersey dispensaries.
                    </p>

                    <h2>What types of dispensaries are supported?</h2>
                    <p>
                        We currently support all dispensaries on New
                        Jersey&apos;s official list of approved dispensaries,
                        except for those that are medical only.
                    </p>

                    <h2>Do you plan on adding more dispensaries?</h2>
                    <p>
                        Yes, we plan on adding any new dispensaries as they are
                        added to New Jersey&apos;s official list of approved
                        dispensaries, which can be found{' '}
                        <Link
                            href="https://data.nj.gov/Reference-Data/New-Jersey-Cannabis-Dispensary-Locations/uyq5-2c2g"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            here
                        </Link>
                        .
                    </p>
                    <p>
                        Here is the current list of dispensaries we are
                        currently working on integrating:
                    </p>
                    <ul>
                        <li>1634 Funk - Jersey City</li>
                        <li>A21 Wellness - Scotch Plains</li>
                        <li>Anja - Highland Park</li>
                        <li>Aunt Mary&apos;s Dispensary, LLC - Flemington</li>
                        <li>Bakin&apos; Bad - Atlantic City</li>
                        <li>Baked by the River - Lambertville</li>
                        <li>Bay Street Greenery - Jersey City</li>
                        <li>Bloc - Waretown</li>
                        <li>Blossom Dispensary - Jersey City</li>
                        <li>Blue Oak - Bloomfield</li>
                        <li>Blue Violets - Hoboken</li>
                        <li>Botera Union - Union</li>
                        <li>Camden Apothecary - Camden</li>
                        <li>Cannabis Clubhouse - Sussex</li>
                        <li>CannaBoy Treehouse - South Orange</li>
                        <li>Castaway Cannabis - Delran</li>
                        <li>Cannabis Connection - Jersey City</li>
                        <li>Cloud Nine Dispensary - North Plainfield</li>
                        <li>Cookies Harrison - Harrison</li>
                        <li>Dank Poet Dispensary - Washington</li>
                        <li>Daylite Cannabis - Mount Laurel</li>
                        <li>Design 710 - Atlantic City</li>
                        <li>Dreamland Cannabis - Jersey City</li>
                        <li>Dispensary of Somerset - Somerset</li>
                        <li>Dispensary of Union - Union</li>
                        <li>downtown FLWR - Jersey City</li>
                        <li>Eastern Green - Voorhees</li>
                        <li>Elevated by TheCannaBossLady - Maplewood</li>
                        <li>Elevated Herb - West Milford</li>
                        <li>Evolve Cannabis - Bordentown</li>
                        <li>Fire and Oak - Mount Holly</li>
                        <li>Flower & Flame Dispensary - Blackwood</li>
                        <li>G2 Dispensary - Rockaway</li>
                        <li>Garden Greenz - Jersey City</li>
                        <li>Garden State Botanicals - North Brunswick</li>
                        <li>Garfield Gardens Dispensary - Garfield</li>
                        <li>Garden State Botanicals - North Brunswick</li>
                        <li>Golden Door Dispensary - Jersey City</li>
                        <li>Garden State Botanicals - North Brunswick</li>
                        <li>Green Oasis Dispensary - Atco</li>
                        <li>Gynsyng - Merchantville</li>
                        <li>Hackettstown Dispensary - Hackettstown</li>
                        <li>Hashery - Hackensack</li>
                        <li>The Healing Side - Atlantic City</li>
                        <li>High Profile Lakehurst - Lakehurst</li>
                        <li>High Rollers Dispensary - Atlantic City</li>
                        <li>High Street Dispensary - Hackettstown</li>
                        <li>Highway 90 - Evesham</li>
                        <li>Herbhub - Jersey City</li>
                        <li>Holistic Re-Leaf - Rockaway</li>
                        <li>Indigo - Brooklawn</li>
                        <li>Jersey Meds - Pennington</li>
                        <li>Jersey Roots - West Milford</li>
                        <li>Joy Leaf - Roselle</li>
                        <li>Kind Kush - Rockaway</li>
                        <li>Leaf Haus - Somerset</li>
                        <li>Leaf Joint - Jersey City</li>
                        <li>Legal Distribution - Atlantic City</li>
                        <li>Lemon 22 - Scotch Plains</li>
                        <li>Mass Grown - Mount Holly</li>
                        <li>Med Leaf - Egg Harbor</li>
                        <li>Midnight Greens - Blackwood</li>
                        <li>Molly Ann Farms - Haledon</li>
                        <li>Mountain View Farmacy - West Milford</li>
                        <li>Natural Apothecary - Belleville</li>
                        <li>New Era Dispensary - South Bound Brook</li>
                        <li>Nightjar - Bloomfield</li>
                        <li>Nirvana - Mount Laurel</li>
                        <li>NJ Leaf - Freehold</li>
                        <li>Noire Dispensary - Maplewood</li>
                        <li>Ohm Theory - Elmwood Park</li>
                        <li>Organic Farms - Camden</li>
                        <li>Phula - Mount Holly</li>
                        <li>Plantabis - Rahway</li>
                        <li>Premo - Keyport</li>
                        <li>Puffin Store - New Brunswick</li>
                        <li>Pioneer Dispensary - Jersey City</li>
                        <li>Pure Blossom - Pennington</li>
                        <li>Queen City Remedies - Plainfield</li>
                        <li>RIPT - Jersey City</li>
                        <li>Roots Dispensary - Willingboro</li>
                        <li>Royal M - Plainfield</li>
                        <li>Shore House Canna - West Cape May</li>
                        <li>SilverLeaf Wellness - Somerset</li>
                        <li>SunnyTien - Atlantic City</li>
                        <li>The Cannabis Place - Jersey City</li>
                        <li>Theo A. Cannabis - Franklin Park</li>
                        <li>The Social Leaf - South Toms River</li>
                        <li>Timber 5 - Somerset</li>
                        <li>Township Green - Riverside</li>
                        <li>Unity Rd. Cannabis Shop - Somerset</li>
                        <li>Urge - Union</li>
                        <li>Voltaire NJ - Mount Holly</li>
                        <li>Zacate - Delran</li>
                    </ul>
                </div>
            </PageContainer>
        </>
    );
};

export default FAQ;
