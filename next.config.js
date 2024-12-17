/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['utfs.io'], // Adicionando o domínio 'utfs.io' para permitir o carregamento de imagens desse domínio
    },
};

module.exports = nextConfig;
