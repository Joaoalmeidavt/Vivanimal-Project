/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['utfs.io'], // Adicionando o domínio 'utfs.io' para permitir o carregamento de imagens desse domínio
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://ec2-13-48-55-28.eu-north-1.compute.amazonaws.com:8080/api/:path*',
            },
        ];
    },
};

module.exports = nextConfig;
