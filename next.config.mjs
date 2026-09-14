/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Remotion pulls in server-only / native deps — keep them out of the app bundle.
  webpack: (config) => {
    config.externals = [...(config.externals || []), '@remotion/bundler', '@remotion/renderer'];
    return config;
  },
};

export default nextConfig;
