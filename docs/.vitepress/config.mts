import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'greenbook',
  description: "The (very unofficial) guide to CU ANES residency",

  head: [['link', { rel: 'icon', href: '/greek-gamma.svg' }]],

  sitemap: {
    hostname: 'https://gb.cugammadex.com/',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: '/greek-gamma.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Rotations',
        items: [
          { text: "All rotations", link: '/r'},
          { text: "CT Anes", link: '/r/ct' },
          { text: "OB Anes", link: '/r/ob'},
          { text: "Txp Anes", link: '/r/txp'},
          { text: "NORA", link: '/r/nora'},
        ]}
    ],
    
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          }
        }
      }
    },
  }
});