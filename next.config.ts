import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image-cdn-fa.spotifycdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "image-cdn-ak.spotifycdn.com",
        pathname: "/**",
      },
      /** Spotify direct artwork CDN (some share links resolve here) */
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "/**",
      },
      /** Apple Music / iTunes artwork */
      {
        protocol: "https",
        hostname: "*.mzstatic.com",
        pathname: "/**",
      },
      /** SoundCloud artwork */
      {
        protocol: "https",
        hostname: "*.sndcdn.com",
        pathname: "/**",
      },
      /** Bandcamp album art */
      {
        protocol: "https",
        hostname: "*.bcbits.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
      /** YouTube CDN (alternate thumb paths) */
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vumbnail.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
