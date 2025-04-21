import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Diretório de saída
    rollupOptions: {
      input: './index.html'  // Ou o caminho do seu arquivo principal
    }
  },
  publicDir: 'public', // Caso você tenha um diretório para arquivos estáticos
})
