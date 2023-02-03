import {PluginBuilder} from './builders/plugin.builder';
import {LoaderBuilder} from './builders/loader.builder';
import {type Configuration, type ResolveOptions, type RuleSetRule, type WebpackPluginInstance} from 'webpack';
import {ResolverBuilder} from './builders/resolver.builder';
import {type WebpackConfiguratorOptions} from './types/webpack-configurator-options.type';
import {type WebpackPluginBuilderOptions} from './builders/types/plugin-builder-options.type';
import {DevServerBuilder} from './builders/dev-server.builder';
import {type Configuration as DevServerConfiguration} from 'webpack-dev-server';
import {type DevServerBuilderOptions} from './builders/types/dev-server-builder-options.type';
import {type LoaderBuilderOptions} from './builders/types/loader-builder-options.type';
import {type ResolverBuilderOptions} from './builders/types/resolver-builder-options.type';

export class WebpackConfigurator {
	private static get FILE_NAME_OUTPUT_PATTERN() {
		return '[name].[contenthash].js';
	}

	private readonly resolversBuilder: ResolverBuilder;
	private readonly loadersBuilder: LoaderBuilder;
	private readonly pluginsBuilder: PluginBuilder;
	private readonly devServerBuilder: DevServerBuilder;

	constructor() {
		this.resolversBuilder = new ResolverBuilder();
		this.loadersBuilder = new LoaderBuilder();
		this.pluginsBuilder = new PluginBuilder();
		this.devServerBuilder = new DevServerBuilder();
	}

	buildConfig({mode, isDev, entryPointPath, buildPath, buildersOptions}: WebpackConfiguratorOptions): Configuration {
		return {
			mode,
			entry: entryPointPath,
			output: {
				filename: WebpackConfigurator.FILE_NAME_OUTPUT_PATTERN,
				path: buildPath,
				clean: true,
			},
			plugins: this.buildPlugins(buildersOptions.pluginsOptions),
			module: {
				rules: this.buildLoaders(buildersOptions.loadersOptions),
			},
			resolve: this.buildResolvers(buildersOptions.resolversOptions),
			devtool: isDev ? 'inline-source-map' : undefined,
			devServer: isDev ? this.buildDevServer(buildersOptions.devServerOptions) : undefined,
		};
	}

	private buildPlugins(options: WebpackPluginBuilderOptions): WebpackPluginInstance[] {
		return this.pluginsBuilder.build(options);
	}

	private buildResolvers(options: ResolverBuilderOptions): ResolveOptions {
		return this.resolversBuilder.build(options);
	}

	private buildLoaders(options: LoaderBuilderOptions): RuleSetRule[] {
		return this.loadersBuilder.build(options);
	}

	private buildDevServer(options: DevServerBuilderOptions): DevServerConfiguration {
		return this.devServerBuilder.build(options);
	}
}
