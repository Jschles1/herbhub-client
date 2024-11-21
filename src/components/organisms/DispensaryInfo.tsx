import * as React from 'react';
import { Card, createStyles, Text, Tabs, Button } from '@mantine/core';
import { Dispensary } from '../../lib/interfaces';
import mapboxgl from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import PrimaryButton from '../atoms/PrimaryButton';

interface Props {
    dispensary: Dispensary;
    splitMenus: boolean;
}

const useStyles = createStyles((theme) => ({
    location: {
        textTransform: 'capitalize',
    },
    infoContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            flexDirection: 'column-reverse',
        },
    },
    infoCard: {
        flex: 1,
        fontSize: '0.8rem',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            height: '400px',
            flex: 'unset',
        },
    },
    mapContainer: {
        width: 'calc(100% - 282px)',
        height: '400px',
        borderRadius: '4px',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            width: '100%',
        },
    },
    tabList: {
        justifyContent: 'space-around',
    },
    tabPanel: {
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        position: 'relative',
        height: '100%',
    },
    hours: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
    buttonContainer: {
        flex: 1,
    },
    button: {
        textTransform: 'uppercase',
        width: '100%',
        position: 'absolute',
        bottom: '2rem',
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            lineHeight: '1rem',
            paddingTop: '0.25rem',
            paddingBottom: '0.25rem',
            height: '42px',
        },
    },
}));

const DispensaryInfo: React.FC<Props> = ({ dispensary, splitMenus }) => {
    const { classes, cx } = useStyles();
    const mapRef = React.useRef<mapboxgl.Map | null>(null);
    const mapContainerRef = React.useRef<HTMLDivElement | null>(null);
    const coordinates = dispensary.geocode
        .replace('POINT (', '')
        .replace(')', '')
        .split(' ')
        .map((coord) => parseFloat(coord)) as [number, number];

    const menus = splitMenus
        ? 'Recreational & Medical'
        : dispensary.type === 'Recreational cannabis only'
        ? 'Recreational'
        : 'Medical';

    React.useEffect(() => {
        if (mapContainerRef.current) {
            mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;
            const map = new mapboxgl.Map({
                container: mapContainerRef.current,
                center: coordinates,
                zoom: 15,
            });
            const _ = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
            mapRef.current = map;
        }

        return () => {
            mapRef.current?.remove();
        };
    }, [mapContainerRef, coordinates]);

    return (
        <div>
            <Text component="h3" className={classes.location}>
                {dispensary.name} - {dispensary.location}
            </Text>
            <div className={classes.infoContainer}>
                <Card withBorder className={classes.infoCard}>
                    <Tabs
                        defaultValue="info"
                        styles={{
                            tabsList: {
                                justifyContent: 'space-around',
                            },
                            tab: {
                                '&[data-active]': {
                                    borderColor: 'green',
                                },
                                '&[data-active]:hover': {
                                    borderColor: 'green',
                                },
                            },
                            panel: {
                                height: '100%',
                            },
                            root: {
                                height: '100%',
                            },
                        }}
                    >
                        <Tabs.List>
                            <Tabs.Tab value="info">Info</Tabs.Tab>
                            <Tabs.Tab value="hours">Hours</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="info" className={classes.tabPanel}>
                            <div className={classes.info}>
                                <div>
                                    <Text weight="bold">Location:</Text>
                                    <Text>{dispensary.fullAddress}</Text>
                                </div>
                                <div>
                                    <Text weight="bold">Phone:</Text>
                                    <Text>
                                        {dispensary.formattedPhoneNumber ||
                                            'Unknown'}
                                    </Text>
                                </div>
                                <div>
                                    <Text weight="bold">Menus:</Text>
                                    <Text>{menus}</Text>
                                </div>
                                {dispensary.wheelchairAccessible && (
                                    <div>
                                        <Text weight="bold">
                                            &#10003; Wheelchair Accessible
                                        </Text>
                                    </div>
                                )}

                                <div className={classes.buttonContainer}></div>
                            </div>

                            <PrimaryButton
                                className={classes.button}
                                component="a"
                                href={dispensary.googleMapsUrl}
                                target="_blank"
                            >
                                Directions
                            </PrimaryButton>
                        </Tabs.Panel>

                        <Tabs.Panel
                            value="hours"
                            className={cx(classes.tabPanel, classes.hours)}
                        >
                            {dispensary.openingHours.length > 0
                                ? dispensary.openingHours.map((time) => (
                                      <Text key={time}>{time}</Text>
                                  ))
                                : 'Unknown'}
                        </Tabs.Panel>
                    </Tabs>
                </Card>
                <div
                    id="mapbox-container"
                    className={classes.mapContainer}
                    ref={mapContainerRef}
                ></div>
            </div>
        </div>
    );
};

export default DispensaryInfo;
