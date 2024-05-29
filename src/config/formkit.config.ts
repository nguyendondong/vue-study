import { vi, en } from '@formkit/i18n'
import { defaultConfig } from '@formkit/vue'
import { rootClasses } from '@/config/formkit.theme.ts'
import { genesisIcons } from '@formkit/icons'

export default defaultConfig({
  locales: { en, vi },
  locale: 'en',
  config: {
    rootClasses
  },
  icons: {
    ...genesisIcons
  },
  props: {
    validation: 'required|length:5,20'
  }
})
