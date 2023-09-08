/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/mexpenses.github.io' : '';

module.exports = {
    basePath: basePath,
    assetPrefix: `${basePath}/`,
    images: {
        unoptimized: true
    }
};