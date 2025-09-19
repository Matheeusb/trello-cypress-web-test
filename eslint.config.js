import pluginJs from '@eslint/js'
import pluginCypress from 'eslint-plugin-cypress/flat'
import globals from 'globals'

export default [
  pluginJs.configs.recommended,
  pluginCypress.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
        cy: 'readonly',
        Cypress: 'readonly',
        expect: 'readonly',
        assert: 'readonly',
        chai: 'readonly'
      }
    }
  },
  'eslint-config-prettier'
]
