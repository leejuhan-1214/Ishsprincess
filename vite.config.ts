import { defineConfig } from 'vite';
export default defineConfig({ base: './', build: { outDir: 'docs', emptyOutDir: true,rollupOptions:{output:{manualChunks(id){if(id.includes('node_modules')&&(id.includes('react')||id.includes('scheduler')))return 'vendor';}}} }, server: {host:'0.0.0.0'} });
