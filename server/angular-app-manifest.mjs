
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-VEFSCYLV.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 68466, hash: '79a34c974886a42a3302a3844043d0711a32efa368a08879601c32d72c415b22', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17240, hash: 'e0fa9f8652e64eba1a681156961d67d979653a6d155488099408a08fa699a68f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'main-2Z4LAPPK.css': {size: 83445, hash: 'V/7KVlYTzjM', text: () => import('./assets-chunks/main-2Z4LAPPK_css.mjs').then(m => m.default)},
    'main.server.css': {size: 83445, hash: 'V/7KVlYTzjM', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'server.css': {size: 83445, hash: 'V/7KVlYTzjM', text: () => import('./assets-chunks/server_css.mjs').then(m => m.default)},
    'styles-FYHFYU4V.css': {size: 403595, hash: 'iEtFtw80ots', text: () => import('./assets-chunks/styles-FYHFYU4V_css.mjs').then(m => m.default)}
  },
};
