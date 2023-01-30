import { PluginBuilder } from "./builders/plugin.builder";
import { LoaderBuilder } from "./builders/loader.builder";
import { Configuration, ResolveOptions, RuleSetRule, WebpackPluginInstance } from "webpack";
import { ResolverBuilder} from "./builders/resolver.builder";
import { IWebpackConfiguratorOptions } from "./interfaces/webpack-configurator-options.interface";
import { IWebpackPluginBuilderOptions } from "./builders/interfaces/plugin-builder-options.interface";
import {DevServerBuilder} from "./builders/dev-server.builder";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {IDevServerBuilderOptions} from "./builders/interfaces/dev-server-builder-options.interface";
import {ILoaderBuilderOptions} from "./builders/interfaces/loader-builder-options.interface";

export class WebpackConfigurator {
    private static readonly FILE_NAME_OUTPUT_PATTERN = '[name].[contenthash].js';

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

    buildConfig({mode, isDev, entryPointPath, buildPath, buildersOptions}: IWebpackConfiguratorOptions): Configuration {
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
            resolve: this.buildResolvers(),
            devtool: isDev ? 'inline-source-map' : undefined,
            devServer: isDev ? this.buildDevServer(buildersOptions.devServerOptions) : undefined,
        }
    }
    private buildPlugins(options: IWebpackPluginBuilderOptions): WebpackPluginInstance[] {
        return this.pluginsBuilder.build(options);
    }

    private buildResolvers(): ResolveOptions {
        return this.resolversBuilder.build();
    }

    private buildLoaders(options: ILoaderBuilderOptions): RuleSetRule[] {
        return this.loadersBuilder.build(options);
    }

    private buildDevServer(options: IDevServerBuilderOptions): DevServerConfiguration {
        return this.devServerBuilder.build(options);
    }
}