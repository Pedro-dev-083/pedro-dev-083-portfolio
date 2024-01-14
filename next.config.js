/** @type {import('next').NextConfig} */

const nextConfig = {
   reactStrictMode: true,
   compiler: {
      styledComponents: true,
   },
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
            port: "",
            pathname: "/u/**",
         },
      ],
   },
};

module.exports = nextConfig;
