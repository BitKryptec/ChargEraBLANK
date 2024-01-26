/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,

    env: {
        IMC_DEFAULT_REGION:     process.env.IMC_DEFAULT_REGION,
        NEXT_PUBLIC_SITE_URL:   process.env.NEXT_PUBLIC_SITE_URL,
        GA_TRACKING_ID:         process.env.GA_TRACKING_ID
    },
}

module.exports = nextConfig
