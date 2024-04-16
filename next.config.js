/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io', "res.cloudinary.com"], // Add other allowed domains if needed
    },
}

module.exports = nextConfig
