module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
	  'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	plugins: [
		'svelte3', 
		'@typescript-eslint'
	],
	ignorePatterns: ['*.config.*'],
	rules: {
		'comma-dangle': 'off',
		'func-call-spacing': 'off',
    'indent': 'off',
		'no-multiple-empty-lines': 'off',
		'space-before-function-paren': ['error', 'always'],
		'@typescript-eslint/func-call-spacing': ['error', 'always'],
		'@typescript-eslint/indent': ['error', 2],
		'@typescript-eslint/indent': ['error', 2],
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
	},
	overrides: [
		{ 
			files: ['*.svelte'], 
			processor: 'svelte3/svelte3' 
		}
	],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		project: './tsconfig.json',
		warnOnUnsupportedTypeScriptVersion: false,
    extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
