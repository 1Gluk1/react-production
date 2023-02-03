import {type HTMLWebpackPluginOptions} from '../../plugins/interfaces/html-webpack-plugin-options.interface';
import {type DefinePluginOptions} from '../../plugins/interfaces/define-plugin-options.interface';

export type WebpackPluginBuilderOptions = {
	htmlPluginOptions: HTMLWebpackPluginOptions;
	definePluginOptions: DefinePluginOptions;
};
