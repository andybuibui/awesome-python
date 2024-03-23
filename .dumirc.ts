import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Awesome Python',
    rtl: true,
    socialLinks: {
      github: 'https://github.com/andybuibui/awesome-python',
    },
    nav: [],
    footer: `Awesome Python | Copyright © 2024-present`,
    logo: '/favicon.png',
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
});
