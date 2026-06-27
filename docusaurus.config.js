// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KnotLink - 轻量化应用互联',
  tagline: '为所有软件的对话，打一个理解的结',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://knotlinkdoc.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'KnotLink', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'KnotLink',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教程文档',
          },
          // {to: '/docs/user-guidance/basic-usage', label: '用户教程', position: 'left'},
          // {to: '/docs/user-guidance/basic-usage', label: '开发者文档', position: 'left'},
          // {to: '/blog', label: '协议规范', position: 'left'},
          {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
  style: 'dark',
  links: [
    {
      title: '文档',
      items: [
        {
          label: '快速入门',
          to: '/docs/intro',
        },
        {
          label: '用户教程',
          to: '/docs/category/用户教程',
        },
        {
          label: '开发者文档',
          to: '/docs/category/开发者文档',
        },
      ],
    },
    {
      title: '社区',
      items: [
        {
          label: 'GitHub 仓库',
          href: 'https://github.com/KnotLink-Protocol',
        },
        {
          label: '讨论区',
          href: 'https://github.com/KnotLink-Protocol/knotlink/discussions',
        },
        {
          label: '问题反馈',
          href: 'https://github.com/KnotLink-Protocol/knotlink/issues',
        },
      ],
    },
    {
      title: '更多',
      items: [
        {
          label: '博客',
          to: '/blog',
        },
        {
          label: '协议规范',
          to: '/docs/category/协议规范',
        },
        {
          label: '生态节点',
          to: '/docs/category/结点与配方索引',
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} KnotLink 开源社区. Built with Docusaurus.`,
},
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
