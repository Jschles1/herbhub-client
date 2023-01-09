import * as React from 'react';
import { Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';

const Logo = () => {
    const theme = useMantineTheme();
    return (
        <Text>
            <Link
                href="/"
                style={{
                    textDecoration: 'none',
                    color: theme.colors.green[5],
                    fontWeight: 'bold',
                }}
            >
                HerbHub NJ
            </Link>
        </Text>
    );
};

export default React.memo(Logo);
