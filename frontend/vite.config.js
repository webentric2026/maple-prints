import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// NOTE: Do NOT add a standalone `@rolldown/plugin-babel` with
// `reactCompilerPreset()` here. It re-transforms modules after
// `@vitejs/plugin-react` injects its Fast Refresh preamble, which breaks
// dev with: "@vitejs/plugin-react can't detect preamble. Something is wrong."
// If you want React Compiler later, pin compatible versions of
// vite / @vitejs/plugin-react / @rolldown/plugin-babel first and follow:
// https://github.com/vitejs/vite-plugin-react#react-compiler

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})
