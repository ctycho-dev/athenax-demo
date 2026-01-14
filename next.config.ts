import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   /* config options here */
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "athenax.mypinx.store",
         },
         {
            protocol: "https",
            hostname: "i.ytimg.com",
         },
      ],
   },
};

export default nextConfig;
