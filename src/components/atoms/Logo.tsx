import * as React from 'react';
import { Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';

const Logo = () => {
    const theme = useMantineTheme();
    return (
        <Text size="xl">
            <Link
                href="/"
                style={{
                    textDecoration: 'none',
                    color: theme.colors.green[5],
                    fontWeight: 'bold',
                }}
            >
                Jersey Herbhub
            </Link>
        </Text>
    );
};

export default React.memo(Logo);
