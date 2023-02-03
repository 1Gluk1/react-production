module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'xo',
		'plugin:i18next/recommended',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			rules: {
				'@typescript-eslint/prefer-nullish-coalescing': [0],
				'@typescript-eslint/naming-convention': [0],
			},
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json'],
	},
	plugins: [
		'react',
		'i18next',
	],
	rules: {
		'i18next/no-literal-string': ['warn', {markupOnly: true}],
	},
	globals: {
		__IS_DEV__: true,
	},
};
