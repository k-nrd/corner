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
	ignorePatterns: [
		'*.config.*', 
		'*.cjs'
	],
	rules: {
		'indent': 'off',
		'comma-dangle': 'off',
		'func-call-spacing': 'off',
		'no-multiple-empty-lines': 'off',
		'space-before-function-paren': 'off',
		'@typescript-eslint/indent': ['error', 2],
		'@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
		'@typescript-eslint/func-call-spacing': ['error', 'always'],
		'@typescript-eslint/space-before-function-paren': ['error', 'always'],
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
	},
	overrides: [
		{ 
			files: ['*.svelte'], 
			processor: 'svelte3/svelte3',
			rules: {
				'no-use-before-define': 'off',
				'@typescript-eslint/comma-dangle': 'off',
				'@typescript-eslint/no-empty-function': 'off'
			}
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
}
