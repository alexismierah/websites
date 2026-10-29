import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-*" },
      { protocol: "https", hostname: "20659463.fs1.hubspotusercontent-na1.net", pathname: "/hubfs/**" },
      { protocol: "https", hostname: "www.hotbot.com", pathname: "/articles/wp-content/uploads/**" },

      // Added for services-data
      { protocol: "https", hostname: "mds.com.om", pathname: "/wp-content/uploads/**" },
      { protocol: "https", hostname: "vetec.dk", pathname: "/wp-content/uploads/**" },
      { protocol: "https", hostname: "www.ioephonesystem.com", pathname: "/storage/uploads/**" },
      { protocol: "https", hostname: "cdn.thewirecutter.com", pathname: "/wp-content/media/**" },
      { protocol: "https", hostname: "inbound.usisecurity.com", pathname: "/hubfs/**" },
      { protocol: "https", hostname: "images.ctfassets.net", pathname: "/**" },
      { protocol: "https", hostname: "www.masstrans.in", pathname: "/wp-content/uploads/**" },
      { protocol: "https", hostname: "www.holzmedia.de", pathname: "/workspace/bilder/**" },
      { protocol: "https", hostname: "www.viewsonic.com", pathname: "/library/wp-content/uploads/**" },
      { protocol: "https", hostname: "www.iotroutes.com", pathname: "/sites/default/files/**" },
    ],
  },
};

export default nextConfig;