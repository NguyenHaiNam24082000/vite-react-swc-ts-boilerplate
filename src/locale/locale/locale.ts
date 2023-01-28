import i18n from 'i18next'

export enum Languages {
  AR = 'ar',
  ENGLISH_STUPEFIED = 'en-US',
  VIETNAMESE = 'vi-VN'
}

export interface LanguageEntry {
  name: string
  code: string
  label: string
  value: string
  rtl?: boolean
}

export const DEFAULT_LANGUAGE = 'en-US'

export const languages: { [key in Languages]: LanguageEntry } = Object.freeze({
  ar: {
    name: 'English',
    code: 'en_US',
    label: 'English',
    value: 'English',
    rtl: true
  },
  'en-US': {
    name: 'English',
    code: 'en_US',
    label: 'English',
    value: 'English',
    rtl: false
  },
  'vi-VN': {
    name: 'Tiếng Việt',
    code: 'vi_VN',
    label: 'Viet Nam',
    value: 'Viet Nam',
    rtl: false
  }
})

export const supportedLngs = Object.freeze([...Object.keys(languages)])

export const setLanguage = (locale: string) => {
  //   console.debug(`Setting locale to ${locale}`);
  if (locale !== i18n.language) {
    i18n.changeLanguage(locale)
  }

  const { documentElement } = document
  if (documentElement.lang) {
    documentElement.lang = locale
  }
}

export const isRTL = (locale: string) => {
  return !!languages[locale as Languages]?.rtl
}
