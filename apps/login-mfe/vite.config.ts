import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';
import { dependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    target: 'chrome89',
  },
  plugins: [
    react(),
    federation({
      filename: 'remoteEntry.js',
      name: 'remote',
      exposes: {
        './remote-login': './src/components/LoginForm',
      },
      remotes: {},
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
      },
    }),
  ],
})
