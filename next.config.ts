import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    // Pré carrega as variáveis do tema em cada arquivo .scss
    prependData: `
      @use '@/styles/themes/default.scss' as theme;
    `,
  },
};

export default nextConfig;
