/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {nextConfig, sassOptions: {
  prependData: `@import "styles/theme.scss";`
}}
