import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Use 'node' if you don't need a browser-like environment
    coverage: {
      provider: 'v8', // Using v8 for coverage
      reportsDirectory: './coverage', // Directory to output the coverage report
      reporter: ['text', 'json', 'html'], // Coverage report formats
    },
  },
});
