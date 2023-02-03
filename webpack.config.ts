import {WebpackConfigurator} from './config/webpack/webpack-configurator';
import {resolve} from 'path';
import {type WebpackConfiguratorOptions} from './config/webpack/types/webpack-configurator-options.type';
import {type BuildEnv} from './config/webpack/types/build-env.type';

export default (env: BuildEnv) => {
	const webpackConfigurator: WebpackConfigurator = new WebpackConfigurator();

	const mode = env.mode ?? 'development';
	const port = env.port ?? 3000;

	const isDev = mode === 'development';

	const buildOptions: WebpackConfiguratorOptions = {
		mode,
		isDev,
		entryPointPath: resolve(__dirname, 'src', 'index.tsx'),
		buildPath: resolve(__dirname, 'build'),
		buildersOptions: {
			pluginsOptions: {
				htmlPluginOptions: {
					pathToTemplate: resolve(__dirname, 'public', 'index.html'),
				},
				definePluginOptions: {
					isDev,
				},
			},
			loadersOptions: {
				sassOptions: {
					isNeedExtractCss: !isDev,
					isNeedLoadIndentName: isDev,
				},
			},
			resolversOptions: {
				srcPath: resolve(__dirname, 'src'),
			},
			devServerOptions: {
				port,
			},
		},
	};

	return webpackConfigurator.buildConfig(buildOptions);
};
