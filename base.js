module.exports = {
    // Specifies the ESLint parser
    parser: '@typescript-eslint/parser',
    extends: [
        // Uses the recommended rules from @eslint-plugin-react
        'plugin:react/recommended',
        // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint'
    ],
    plugins: ["react-hooks"],
    parserOptions: {
        // Allows for the parsing of modern ECMAScript features
        ecmaVersion: 2018,
        // Allows for the use of imports
        sourceType: 'module',
        ecmaFeatures: {
            // Allows for the parsing of JSX
            jsx: true
        }
    },
    rules: {
        'prettier/prettier': 'error',
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'prefer-const': 'error',
        'no-var': 'error',
        'no-multiple-empty-lines': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        'react-hooks/rules-of-hooks': 'error',
        '@typescript-eslint/no-empty-interface': 'off',
        'react/display-name': 'off',
        'react/no-deprecated': 'off',
        'react/no-direct-mutation-state': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        'react/jsx-key': 'off',
        'react/prop-types': 'off'
    },
    settings: {
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: 'detect'
        }
    },
    env: {
        browser: true
    }
  }
  