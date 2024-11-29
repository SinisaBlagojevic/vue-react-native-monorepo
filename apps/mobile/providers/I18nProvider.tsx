import React from 'react'
import i18next from 'i18next'
import { initReactI18next, I18nextProvider } from 'react-i18next'
import en from '@/locales/en.json'

export const languageResources = {
  en: { translation: en },
}

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
})

const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
}

export default I18nProvider
