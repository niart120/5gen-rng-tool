/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	 basePath: process.env.NODE_ENV === 'production' ? '/5gen-rng-tool' : ''
}

module.exports = nextConfig
