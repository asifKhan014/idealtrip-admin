/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'localhost', // For local development
        '127.0.0.1', // Also include IP address for localhost
        'your-production-domain.com', // Your production domain
        ...(process.env.NEXT_PUBLIC_BACKEND_URL 
          ? [new URL(process.env.NEXT_PUBLIC_BACKEND_URL).hostname] 
          : [])
      ].filter(Boolean), // Remove any undefined values
    },
    // You can add other Next.js config options here
  };
  
  export default nextConfig;