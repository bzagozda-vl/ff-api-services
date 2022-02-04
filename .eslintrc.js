module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:import/typescript'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        'no-setter-return': 'error',
        yoda: 'error',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'import/no-internal-modules': [
            'warn',
            {
                allow: ['**/actions/*', 'source-map-support/*'],
            },
        ],
    },
};
