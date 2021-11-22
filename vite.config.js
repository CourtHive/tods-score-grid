import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import typescript from '@rollup/plugin-typescript';
import { name } from './package.json';

export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      name,
      fileName: (format) => `${name}.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'JSX'
        }
      }
    }
  }
});
