import { dictionary, locale, _ } from 'svelte-i18n';

function setupI18n({withLocale: _locale}={withLocale: 'en'}) {
  dictionary.set({
    en: {
      app: {
        title: 'Budget Calculator',
      },
    },
    vi: {
      app: {
        title: 'Tính toán thu chi',
      },
    },
  });

  locale.set(_locale);
}

export { _, setupI18n};
