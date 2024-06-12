/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    assetPrefix: isProd ? '/advice-generator/' : '',
    basePath: isProd ? '/advice-generator' : '',
    output: 'export',
    // distDir: 'dist',
    images: {
        loader: 'imgix',
        path: '',
      },
};

export default nextConfig;
// module.exports = nextConfig;
