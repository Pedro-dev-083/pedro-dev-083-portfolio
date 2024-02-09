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
         {
            protocol: "https",
            hostname:
               "portifolio-pedro-dev-083-bucket.s3.sa-east-1.amazonaws.com",
            port: "",
            pathname: "/**/**",
         },
      ],
   },
};

module.exports = nextConfig;
