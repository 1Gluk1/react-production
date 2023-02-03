import {type WebpackPluginInstance, DefinePlugin} from 'webpack';
import {type DefinePluginOptions} from './interfaces/define-plugin-options.interface';

export function definePlugin({isDev}: DefinePluginOptions): WebpackPluginInstance {
	return new DefinePlugin({
		__IS_DEV__: JSON.stringify(isDev),
	});
}
