var en = require('./translations.en.json');
var tr = require('./translations.tr.json');

const i18n = {
  translations: {
    en,
    tr,
  },
  defaultLang: 'tr',
  useBrowserDefault: true,
};

module.exports = i18n;
