import { resolve } from "path";

export default {
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: [
		'node_modules',
	],
	moduleDirectories: [
		'node_modules', 'src',
	],
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],
	rootDir: '../../',
	// ModulePaths: [
	// 	'<rootDir>src',
	// ],
	setupFilesAfterEnv: ['<rootDir>/config/jest/setup-tests.ts'],
	testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
	moduleNameMapper: {
		'\\.s?css$': 'identity-obj-proxy',
		'\\.svg': resolve(__dirname, 'jestEmptyComponent.tsx')
	},
};
