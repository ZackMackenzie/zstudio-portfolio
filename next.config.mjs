/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Type-checking and linting run as separate steps (npm run typecheck / lint) —
  // keeping them out of `next build` keeps peak memory low on constrained machines.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  // Remotion pulls in server-only / native deps — keep them out of the app bundle.
  webpack: (config) => {
    config.externals = [...(config.externals || []), '@remotion/bundler', '@remotion/renderer'];
    return config;
  },
};

export default nextConfig;
