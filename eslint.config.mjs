import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
    {
        ignores: ['dist', 'coverage', 'node_modules'],
    },
    ...tseslint.configs.recommended,
    prettierRecommended,
    {
        rules: {
            'prettier/prettier': 'warn',
        },
    },
    {
        // Strict explicit return types are enforced on the public API only.
        files: ['src/**/*.ts'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                    allowHigherOrderFunctions: false,
                },
            ],
        },
    }
);
