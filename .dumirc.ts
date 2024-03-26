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
    logo: '/awesome-python/logo.png',
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'EN' },
  ],
  base: `/awesome-python/`,
  publicPath: `/awesome-python/`,
  analytics: {
    baidu: 'd383856a4174d931ddbd35288e8535a1'
  }
});
