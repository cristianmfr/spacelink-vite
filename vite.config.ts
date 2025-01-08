import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
      },
   },
   build: {
      outDir: 'build',
      assetsDir: 'bundle',
   },
   publicDir: 'src/assets',
   server: {
      port: 3000,
      fs: {
         allow: ['..'],
      },
      // proxy: {
      //    '/app': {
      //       target: 'http://app.localhost:3000/',
      //       changeOrigin: true,
      //       secure: false,
      //    },
      //    '/auth/login': {
      //       target: 'http://auth.localhost:3000/login',
      //       changeOrigin: true,
      //       secure: false,
      //    },
      // },
   },
})
