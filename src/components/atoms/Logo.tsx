import * as React from 'react';
import { Text } from '@mantine/core';
import Link from 'next/link';

const Logo = () => (
    <Text>
        <Link href="/" style={{ textDecoration: 'none' }}>
            HerbHub NJ
        </Link>
    </Text>
);

export default Logo;
