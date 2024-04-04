import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Đặt tên của file đầu ra ở đây
        entryFileNames: 'video-player.js',
      },
    },
  },
});
