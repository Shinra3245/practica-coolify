/** @type {import('next').NextConfig} */
const nextConfig = {
    // standalone permite empaquetar la app de manera óptima para contenedores Docker
    output: "standalone",
    experimental: { cpus: 1 },
};

export default nextConfig;