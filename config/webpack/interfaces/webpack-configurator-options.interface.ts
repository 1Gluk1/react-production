import {type Configuration} from 'webpack';
import {type IWebpackPluginBuilderOptions} from '../builders/interfaces/plugin-builder-options.interface';
import {type IDevServerBuilderOptions} from '../builders/interfaces/dev-server-builder-options.interface';
import {type ILoaderBuilderOptions} from '../builders/interfaces/loader-builder-options.interface';
import {type IResolverBuilderOptions} from '../builders/interfaces/resolver-builder-options.interface';

export type IWebpackConfiguratorOptions = {
	mode: Configuration['mode'];
	buildPath: string;
	entryPointPath: string;
	isDev: boolean;
	buildersOptions: {
		loadersOptions: ILoaderBuilderOptions;
		pluginsOptions: IWebpackPluginBuilderOptions;
		resolversOptions: IResolverBuilderOptions;
		devServerOptions: IDevServerBuilderOptions;
	};
};
