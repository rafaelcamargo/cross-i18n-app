let cache = new Map();

export const localize = (i18n, translations, cacheId) => {
  if(!cache.get(cacheId) && translations && cacheId) {
    Object.keys(translations).forEach(lang => {
      i18n.addResourceBundle(
        lang,
        'translation',
        translations[lang],
        true,
        false
      );
    });
    cache.set(cacheId, translations);
  }
  return i18n
}
