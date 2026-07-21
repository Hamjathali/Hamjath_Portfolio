import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  // base: process.env.VITE_BASE_PATH ||"/Hamjath_Portfolio", 
  base: '/',
=======
  base: process.env.VITE_BASE_PATH ||"/Hamjath_Portfolio", 
>>>>>>> 60da670a2fddd01f30bf0ff5e9a452f31654a716
});
