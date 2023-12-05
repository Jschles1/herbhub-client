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
            'images.dutchie.com',
            'leafly-public.s3-us-west-2.amazonaws.com',
            'tymber-blaze-products.imgix.net',
            'tymber-blaze-categories.imgix.net',
            'leafly-public.imgix.net',
            'harmony-dispensary.s3.amazonaws.com',
            'imagedelivery.net',
        ],
    },
};

module.exports = nextConfig;
