import { WebpackPluginInstance, DefinePlugin } from 'webpack';
import { IDefinePluginOptions } from './interfaces/define-plugin-options.interface';

export function definePlugin({isDev}: IDefinePluginOptions): WebpackPluginInstance {
    return new DefinePlugin({
        __IS_DEV__: JSON.stringify(isDev)
    });
}