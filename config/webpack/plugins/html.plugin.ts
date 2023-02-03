import HtmlWebpackPlugin from 'html-webpack-plugin';
import {type WebpackPluginInstance} from 'webpack';
import {type HTMLWebpackPluginOptions} from './interfaces/html-webpack-plugin-options.interface';

export function htmlPlugin({pathToTemplate}: HTMLWebpackPluginOptions): WebpackPluginInstance {
	return new HtmlWebpackPlugin({
		template: pathToTemplate,
	});
}
