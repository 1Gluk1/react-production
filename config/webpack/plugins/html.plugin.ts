import HtmlWebpackPlugin from 'html-webpack-plugin';
import {type WebpackPluginInstance} from 'webpack';
import {type IHTMLWebpackPluginOptions} from './interfaces/html-webpack-plugin-options.interface';

export function htmlPlugin({pathToTemplate}: IHTMLWebpackPluginOptions): WebpackPluginInstance {
	return new HtmlWebpackPlugin({
		template: pathToTemplate,
	});
}
