
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/k2u-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/k2u-app/auth/login",
    "route": "/k2u-app"
  },
  {
    "renderMode": 2,
    "route": "/k2u-app/auth"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4TG3A4S5.js",
      "chunk-DPZKWTOM.js"
    ],
    "route": "/k2u-app/auth/login"
  },
  {
    "renderMode": 2,
    "redirectTo": "/k2u-app/auth/login",
    "route": "/k2u-app/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1246, hash: '26b735587511f949d4f072960b4ba122f6e7d6b691e91e59c4712c88a171cee2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1220, hash: '9acc30bb40d1cf8029169801bb50fa389b0c6447ca6844f794348fa740700bf9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'auth/index.html': {size: 20506, hash: '57b308e1e5ab43bb68e3885e916bcc8008a879d90f684a1c9ef8b9bbf5a8d6c3', text: () => import('./assets-chunks/auth_index_html.mjs').then(m => m.default)},
    'auth/login/index.html': {size: 88742, hash: '5d8015148fbb2038c89f04f2367c34d85ca2acf7888b6f761ac1960988796a2b', text: () => import('./assets-chunks/auth_login_index_html.mjs').then(m => m.default)},
    'styles-7KBGY6J5.css': {size: 424, hash: 'MmkVSEwpxFU', text: () => import('./assets-chunks/styles-7KBGY6J5_css.mjs').then(m => m.default)}
  },
};
