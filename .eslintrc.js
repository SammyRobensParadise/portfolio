module.exports = {
  env: {
    browser: true
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'next/core-web-vitals'
    // '@next/eslint-plugin-next'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'import',
    'testing-library'
  ],
  rules: {
    /* NOTE: https://github.com/facebook/create-react-app/pull/8177 */
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          'React.FC': null
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable'],
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE']
      }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '~/**',
            group: 'internal'
          }
        ]
      }
    ],
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': [
      'error',
      {
        exceptions: ['Route', 'RouterLink']
      }
    ],
    /* NOTE: https://github.com/yannickcr/eslint-plugin-react/issues/2396 */
    'react/require-default-props': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        paths: './tsconfig.json'
      }
    },
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  overrides: [
    {
      files: ['./cypress/**/*.{ts,tsx}'],
      extends: [
        'plugin:mocha/recommended',
        'plugin:cypress/recommended',
        'plugin:chai-friendly/recommended',
        'plugin:testing-library/react'
      ],
      parserOptions: {
        project: ['./cypress/tsconfig.json']
      },

      rules: {
        /* NOTE: https://github.com/beacon-biosignals/platform/issues/1471#issuecomment-872162695 */
        'cypress/no-unnecessary-waiting': 'off',
        /* NOTE: https://mochajs.org/#arrow-functions */
        'mocha/no-mocha-arrows': 'off',
        /* NOTE: https://github.com/testing-library/cypress-testing-library/pull/144 */
        'testing-library/await-async-query': 'off',
        'testing-library/await-async-utils': 'off',
        'testing-library/prefer-screen-queries': 'off'
      }
    },
    {
      env: {
        jest: true
      },
      files: ['./jest/**/*.{ts,tsx}'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:testing-library/react'
      ],
      parserOptions: {
        project: ['./jest/tsconfig.json']
      }
    }
  ]
}
