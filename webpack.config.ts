import { WebpackConfigurator } from "./config/webpack/webpack-configurator";
import { resolve } from "path";
import { IWebpackConfiguratorOptions } from "./config/webpack/interfaces/webpack-configurator-options.interface";
import { IBuildEnv } from "./config/webpack/interfaces/build-env.interface";

export default (env: IBuildEnv) => {
    const webpackConfigurator: WebpackConfigurator = new WebpackConfigurator();

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development'

    const buildOptions: IWebpackConfiguratorOptions = {
        mode,
        isDev,
        entryPointPath: resolve(__dirname, 'src', 'index.tsx'),
        buildPath: resolve(__dirname, 'build'),
        buildersOptions: {
            pluginsOptions: {
                htmlPluginOptions: {
                    pathToTemplate: resolve(__dirname, 'public', 'index.html')
                },
            },
            loadersOptions: {
                sassOptions: {
                    isNeedExtractCSS: !isDev,
                    isNeedLoadIndentName: isDev
                }
            },
            devServerOptions: {
                port: PORT,
            }
        }
    }

    return webpackConfigurator.buildConfig(buildOptions)
};