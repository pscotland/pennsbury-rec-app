
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DrtvthrI.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BMAoKCmP.js"
    ],
    "route": "/programs"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TSuOtw6B.js"
    ],
    "route": "/news"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BSyGAj_i.js"
    ],
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14699, hash: '0226f616e6d9d564a12cf863a390f091cc72dbe891f6bd6d1a107578eacc9645', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 968, hash: '03e9723a6ad03b80c738067b651dd37a8b4bb0537aad7c7bdb0e24dee284976c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'programs/index.html': {size: 117040, hash: '18cc86bc80397c9241508b21c913d501a12089fed94374bb13a2514eca1d291f', text: () => import('./assets-chunks/programs_index_html.mjs').then(m => m.default)},
    'index.html': {size: 116871, hash: '327956e9507e72171507318e76cbc086232a3a1d9add3c8697fb84f0860164b4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 117031, hash: 'c436d2ab79544824918f5cf177fb563118567a313961e258c04a5dd8cc1f123f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 117015, hash: '2113cfe2b9ce62f3c25d2689ac215f93032aca4fe9badd1349ca8b563569c69a', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 117041, hash: '0bd263963ff57faa015666f675130cb1960fce1a6a44668ab3177d3c82623d98', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-FG3O56KX.css': {size: 40571, hash: 'xaHYhObS+EU', text: () => import('./assets-chunks/styles-FG3O56KX_css.mjs').then(m => m.default)}
  },
};
