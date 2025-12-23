import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import a11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  js.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { a11y, react },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'warn',
      'jsx-a11y/aria-role': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
    },
  },
  prettier,
])
