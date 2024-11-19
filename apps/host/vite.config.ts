import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';

import { dependencies } from './package.json';
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001
  },
  build: {
		target: 'chrome89',
	},
	plugins: [
		federation({
			name: 'host',
			remotes: {
				remote: {
					type: 'module',
					name: 'remote',
					entry: 'http://localhost:3000/remoteEntry.js',
					entryGlobalName: 'remote',
					shareScope: 'default',
				},
			},
			exposes: {},
			filename: 'remoteEntry.js',
			shared: {
				react: {
					requiredVersion: dependencies.react,
					singleton: true,
				},
			},
		}),
		react(),
	],
})
