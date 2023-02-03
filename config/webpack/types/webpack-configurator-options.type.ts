import {type Configuration} from 'webpack';
import {type WebpackPluginBuilderOptions} from '../builders/types/plugin-builder-options.type';
import {type DevServerBuilderOptions} from '../builders/types/dev-server-builder-options.type';
import {type LoaderBuilderOptions} from '../builders/types/loader-builder-options.type';
import {type ResolverBuilderOptions} from '../builders/types/resolver-builder-options.type';

export type WebpackConfiguratorOptions = {
	mode: Configuration['mode'];
	buildPath: string;
	entryPointPath: string;
	isDev: boolean;
	buildersOptions: {
		loadersOptions: LoaderBuilderOptions;
		pluginsOptions: WebpackPluginBuilderOptions;
		resolversOptions: ResolverBuilderOptions;
		devServerOptions: DevServerBuilderOptions;
	};
};
