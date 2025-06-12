import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import concat from '@vituum/vite-plugin-concat'
import FastGlob from 'fast-glob'
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const htmlFilesList = Object.fromEntries(
  FastGlob.sync('src/*.html').map(file => [
    path.relative(
      'src',
      file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
  ]));

const inputFilesList = {
  ...htmlFilesList,
  'main': 'src/js/main.js',
}

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "./",
  root: "src",
  publicDir: "../public",
  build: {
    minify: "esbuild",
    outDir: "../docs",
    sourcemap: "inline",
    emptyOutDir: true,
    rollupOptions: {
      input: inputFilesList,
      output: {
        sourcemap: true,
        entryFileNames: ({name}) => {
          if( name === 'main' ) {
            return 'js/main.js';
          }
          return "[name].js";
        },
      },
    },
  },
  server: {
    open: "/index.html",
    watch: {
      usePolling: true
    }
  },
  plugins: [
    injectHTML(),
    ViteImageOptimizer({
    }),
    concat({
      input: ['main.js']
    }),
  ],
}));