import {WebpackConfigurator} from './config/webpack/webpack-configurator';
import {resolve} from 'path';
import {type IWebpackConfiguratorOptions} from './config/webpack/interfaces/webpack-configurator-options.interface';
import {type IBuildEnv} from './config/webpack/interfaces/build-env.interface';

export default (env: IBuildEnv) => {
	const webpackConfigurator: WebpackConfigurator = new WebpackConfigurator();

	const mode = env.mode ?? 'development';
	const port = env.port ?? 3000;

	const isDev = mode === 'development';

	const buildOptions: IWebpackConfiguratorOptions = {
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
