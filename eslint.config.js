import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],
		ignores: [
			'tests/resources/**',
			'**/jquery*.js',
			'**/*tmp*.*',
			'**/*tmp*/',
			'node_modules/',
		],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: {
			globals: globals.node,
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			indent: ['error', 'tab', {
				SwitchCase: 1,
			}],

			'linebreak-style': ['error', 'unix'],

			quotes: ['error', 'single', {
				allowTemplateLiterals: true,
			}],

			semi: ['error', 'always'],
			'no-empty': ['off'],
		}
	},
]);
