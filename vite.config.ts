import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    // Enable minification
    minify: 'terser',
    // Enable gzip compression
    reportCompressedSize: true,
    // Configure terser options for better minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log statements
        drop_debugger: true, // Remove debugger statements
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Remove specific console methods
        passes: 2, // Multiple passes for better compression
      },
      mangle: {
        safari10: true, // Fix Safari 10 issues
      },
      format: {
        comments: false, // Remove comments
      },
    },
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom', 'react-helmet-async'],
          icons: ['lucide-react'],
          ui: ['react-cookie-consent'],
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Target modern browsers for better optimization
    target: 'es2022',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Additional optimizations
    assetsInlineLimit: 4096,
  },
  // Performance optimizations
  server: {
    // Enable HTTP/2 for development
    https: false,
    // Optimize dev server
    hmr: {
      overlay: false
    }
  },
  // Image optimization hints
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.webp'],
});