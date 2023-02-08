/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'dispense-images.imgix.net',
            'sweedpos.s3.amazonaws.com',
            's3-us-west-2.amazonaws.com',
            'product-assets.iheartjane.com',
            'uploads.iheartjane.com',
        ],
    },
};

module.exports = nextConfig;
