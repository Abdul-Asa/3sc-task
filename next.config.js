/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/register",
        missing: [
          {
            type: "cookie",
            key: "auth-token",
          },
        ],
        permanent: false,
      },
      {
        source: "/register",
        destination: "/",
        has: [
          {
            type: "cookie",
            key: "auth-token",
          },
        ],
        permanent: false,
      },
      {
        source: "/vote",
        destination: "/vote/nominate",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
