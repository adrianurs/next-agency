/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
			remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/**',
			},
			],
	},
	webpack: (config) => {
    config.resolve.fallback = {
      "mongodb-client-encryption": false ,
      "aws4": false
    };

    return config;
	}
};

export default nextConfig;
