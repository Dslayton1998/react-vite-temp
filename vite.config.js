import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import eslint from 'vite-plugin-eslint';
//* ^ set the linter up to run automatically whenever you build the app.

//?  https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig(({ mode }) => ({ 
  plugins: [
    react(),
    eslint({
      lintOnStart: true,
      //* ^ This option enables the linter to run at build time.

      failOnError: mode === "production"
      //* ^ This ensures that linter errors--like unused variables--will not prevent Vite from trying to run your app.
    })
  ],
  server: {
    open: true
  } //* ^ Tells Vite to automatically open your app in a browser window when it first starts the server (comment out)
}))