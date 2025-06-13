import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // Корень проекта
  publicDir: 'dist', // Папка для статики
  build: {
    outDir: 'public', // Куда складывать сборку
    emptyOutDir: true, // Очищать dist перед сборкой
  },
  server: {
    open: true, // Открывать браузер при запуске dev-сервера
  },
})