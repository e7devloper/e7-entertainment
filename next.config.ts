import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The product listings now live on each opportunity page (/opportunities/[slug]). Individual
  // product pages stay at /products/[slug]/[subcategorySlug]/[productSlug].
  async redirects() {
    return [
      { source: "/products", destination: "/#opportunities", permanent: false },
      { source: "/products/:slug", destination: "/opportunities/:slug", permanent: false },
      { source: "/products/:slug/:subcategorySlug", destination: "/opportunities/:slug", permanent: false },
    ];
  },
};

export default nextConfig;
