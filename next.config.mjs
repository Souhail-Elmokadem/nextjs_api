/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "media.gettyimages.com",
            "cdn.dummyjson.com"
        ]
    },
    eslint: {
        // Add ESLint rules here
        ignoreDuringBuilds: true // This can be used to ignore ESLint during build
    }
};


export default nextConfig;
