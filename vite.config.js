import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/Sass/Var_Mixins_.scss" as *;`
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: 'src/Sass/App.scss'
      },
      output: {
        dir: 'src/Css',
        assetFileNames: '[name].[ext]'
      }
    }
  }
});
