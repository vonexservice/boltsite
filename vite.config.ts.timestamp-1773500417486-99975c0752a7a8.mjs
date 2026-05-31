// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"]
  },
  esbuild: {
    drop: ["console", "debugger"]
  },
  build: {
    // Enable minification
    minify: "terser",
    // Enable gzip compression
    reportCompressedSize: true,
    // Configure terser options for better minification
    terserOptions: {
      compress: {
        drop_console: true,
        // Remove console.log statements
        drop_debugger: true,
        // Remove debugger statements
        pure_funcs: ["console.log", "console.info", "console.debug"],
        // Remove specific console methods
        passes: 2
        // Multiple passes for better compression
      },
      mangle: {
        safari10: true
        // Fix Safari 10 issues
      },
      format: {
        comments: false
        // Remove comments
      }
    },
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ["react", "react-dom"],
          router: ["react-router-dom", "react-helmet-async"],
          icons: ["lucide-react"],
          ui: ["react-cookie-consent"]
        },
        // Optimize chunk file names
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]"
      }
    },
    // Set chunk size warning limit
    chunkSizeWarningLimit: 500,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Target modern browsers for better optimization
    target: "es2022",
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Additional optimizations
    assetsInlineLimit: 4096
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
  assetsInclude: ["**/*.jpg", "**/*.jpeg", "**/*.png", "**/*.svg", "**/*.webp"]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIG9wdGltaXplRGVwczoge1xuICAgIGV4Y2x1ZGU6IFsnbHVjaWRlLXJlYWN0J10sXG4gIH0sXG4gIGVzYnVpbGQ6IHtcbiAgICBkcm9wOiBbJ2NvbnNvbGUnLCAnZGVidWdnZXInXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICAvLyBFbmFibGUgbWluaWZpY2F0aW9uXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICAvLyBFbmFibGUgZ3ppcCBjb21wcmVzc2lvblxuICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxuICAgIC8vIENvbmZpZ3VyZSB0ZXJzZXIgb3B0aW9ucyBmb3IgYmV0dGVyIG1pbmlmaWNhdGlvblxuICAgIHRlcnNlck9wdGlvbnM6IHtcbiAgICAgIGNvbXByZXNzOiB7XG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSwgLy8gUmVtb3ZlIGNvbnNvbGUubG9nIHN0YXRlbWVudHNcbiAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSwgLy8gUmVtb3ZlIGRlYnVnZ2VyIHN0YXRlbWVudHNcbiAgICAgICAgcHVyZV9mdW5jczogWydjb25zb2xlLmxvZycsICdjb25zb2xlLmluZm8nLCAnY29uc29sZS5kZWJ1ZyddLCAvLyBSZW1vdmUgc3BlY2lmaWMgY29uc29sZSBtZXRob2RzXG4gICAgICAgIHBhc3NlczogMiwgLy8gTXVsdGlwbGUgcGFzc2VzIGZvciBiZXR0ZXIgY29tcHJlc3Npb25cbiAgICAgIH0sXG4gICAgICBtYW5nbGU6IHtcbiAgICAgICAgc2FmYXJpMTA6IHRydWUsIC8vIEZpeCBTYWZhcmkgMTAgaXNzdWVzXG4gICAgICB9LFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIGNvbW1lbnRzOiBmYWxzZSwgLy8gUmVtb3ZlIGNvbW1lbnRzXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gT3B0aW1pemUgY2h1bmsgc3BsaXR0aW5nXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIC8vIFNlcGFyYXRlIHZlbmRvciBjaHVua3MgZm9yIGJldHRlciBjYWNoaW5nXG4gICAgICAgICAgdmVuZG9yOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgICAgIHJvdXRlcjogWydyZWFjdC1yb3V0ZXItZG9tJywgJ3JlYWN0LWhlbG1ldC1hc3luYyddLFxuICAgICAgICAgIGljb25zOiBbJ2x1Y2lkZS1yZWFjdCddLFxuICAgICAgICAgIHVpOiBbJ3JlYWN0LWNvb2tpZS1jb25zZW50J10sXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE9wdGltaXplIGNodW5rIGZpbGUgbmFtZXNcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS1baGFzaF0uanMnLFxuICAgICAgICBhc3NldEZpbGVOYW1lczogJ2Fzc2V0cy9bbmFtZV0tW2hhc2hdLltleHRdJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBTZXQgY2h1bmsgc2l6ZSB3YXJuaW5nIGxpbWl0XG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiA1MDAsXG4gICAgLy8gRW5hYmxlIHNvdXJjZSBtYXBzIGZvciBwcm9kdWN0aW9uIGRlYnVnZ2luZyAob3B0aW9uYWwpXG4gICAgc291cmNlbWFwOiBmYWxzZSxcbiAgICAvLyBUYXJnZXQgbW9kZXJuIGJyb3dzZXJzIGZvciBiZXR0ZXIgb3B0aW1pemF0aW9uXG4gICAgdGFyZ2V0OiAnZXMyMDIyJyxcbiAgICAvLyBFbmFibGUgQ1NTIGNvZGUgc3BsaXR0aW5nXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIC8vIEFkZGl0aW9uYWwgb3B0aW1pemF0aW9uc1xuICAgIGFzc2V0c0lubGluZUxpbWl0OiA0MDk2LFxuICB9LFxuICAvLyBQZXJmb3JtYW5jZSBvcHRpbWl6YXRpb25zXG4gIHNlcnZlcjoge1xuICAgIC8vIEVuYWJsZSBIVFRQLzIgZm9yIGRldmVsb3BtZW50XG4gICAgaHR0cHM6IGZhbHNlLFxuICAgIC8vIE9wdGltaXplIGRldiBzZXJ2ZXJcbiAgICBobXI6IHtcbiAgICAgIG92ZXJsYXk6IGZhbHNlXG4gICAgfVxuICB9LFxuICAvLyBJbWFnZSBvcHRpbWl6YXRpb24gaGludHNcbiAgYXNzZXRzSW5jbHVkZTogWycqKi8qLmpwZycsICcqKi8qLmpwZWcnLCAnKiovKi5wbmcnLCAnKiovKi5zdmcnLCAnKiovKi53ZWJwJ10sXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXlOLFNBQVMsb0JBQW9CO0FBQ3RQLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGNBQWM7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTSxDQUFDLFdBQVcsVUFBVTtBQUFBLEVBQzlCO0FBQUEsRUFDQSxPQUFPO0FBQUE7QUFBQSxJQUVMLFFBQVE7QUFBQTtBQUFBLElBRVIsc0JBQXNCO0FBQUE7QUFBQSxJQUV0QixlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUE7QUFBQSxRQUNkLGVBQWU7QUFBQTtBQUFBLFFBQ2YsWUFBWSxDQUFDLGVBQWUsZ0JBQWdCLGVBQWU7QUFBQTtBQUFBLFFBQzNELFFBQVE7QUFBQTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBLE1BQ1o7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGNBQWM7QUFBQTtBQUFBLFVBRVosUUFBUSxDQUFDLFNBQVMsV0FBVztBQUFBLFVBQzdCLFFBQVEsQ0FBQyxvQkFBb0Isb0JBQW9CO0FBQUEsVUFDakQsT0FBTyxDQUFDLGNBQWM7QUFBQSxVQUN0QixJQUFJLENBQUMsc0JBQXNCO0FBQUEsUUFDN0I7QUFBQTtBQUFBLFFBRUEsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLHVCQUF1QjtBQUFBO0FBQUEsSUFFdkIsV0FBVztBQUFBO0FBQUEsSUFFWCxRQUFRO0FBQUE7QUFBQSxJQUVSLGNBQWM7QUFBQTtBQUFBLElBRWQsbUJBQW1CO0FBQUEsRUFDckI7QUFBQTtBQUFBLEVBRUEsUUFBUTtBQUFBO0FBQUEsSUFFTixPQUFPO0FBQUE7QUFBQSxJQUVQLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxlQUFlLENBQUMsWUFBWSxhQUFhLFlBQVksWUFBWSxXQUFXO0FBQzlFLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
