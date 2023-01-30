import { Configuration } from "webpack";
import { IWebpackPluginBuilderOptions } from "../builders/interfaces/plugin-builder-options.interface";
import {IDevServerBuilderOptions} from "../builders/interfaces/dev-server-builder-options.interface";
import {ILoaderBuilderOptions} from "../builders/interfaces/loader-builder-options.interface";

export interface IWebpackConfiguratorOptions {
    mode: Configuration['mode'],
    buildPath: string;
    entryPointPath: string;
    isDev: boolean,
    buildersOptions: {
        loadersOptions: ILoaderBuilderOptions,
        pluginsOptions: IWebpackPluginBuilderOptions,
        devServerOptions: IDevServerBuilderOptions,
    }
}