import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { name } from './package.json';
import path from 'path';

export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.jsx'),
      fileName: (format) => `${name}.${format}.js`,
      name
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
  },
  plugins: [
    react({
      babel: { configFile: true }
    })
  ]
});
