// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prescription Generator',
  tagline: 'put your recipe here',
  url: 'http://121.37.234.56:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/fav.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: 'prescription generator', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        //blog: {
          //showReadingTime: true,
          //// Please change this to your repo.
          //// Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Generator',
        logo: {
          alt: 'Logo',
          src: 'img/logo1.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documents',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          //{
            //href: 'https://github.com/facebook/docusaurus',
            //label: 'GitHub',
            //position: 'right',
          //},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documents',
                to: '/docs/intro',
              },
              {
                label: 'Generator',
                to: '/',
              },
            ],
          },
          //{
            //title: 'Community',
            //items: [
              //{
                //label: 'Stack Overflow',
                //href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              //},
              //{
                //label: 'Discord',
                //href: 'https://discordapp.com/invite/docusaurus',
              //},
              //{
                //label: 'Twitter',
                //href: 'https://twitter.com/docusaurus',
              //},
            //],
          //},
          //{
            //title: 'More',
            //items: [
              //{
                //label: 'Blog',
                //to: '/blog',
              //},
              //{
                //label: 'GitHub',
                //href: 'https://github.com/facebook/docusaurus',
              //},
            //],
          //},
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
