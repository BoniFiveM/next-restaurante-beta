import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Habilita o modo estrito do React para identificar possíveis problemas
  swcMinify: true, // Usa o SWC para minificar o código
  images: {
    domains: ['example.com'], // Adiciona domínios de imagens permitidos
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // Configurações para o webpack no lado do cliente
    }
    return config;
  },
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL || 'https://api.example.com', // Variáveis de ambiente
  },
};

export default nextConfig;
