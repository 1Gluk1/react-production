import {type IHTMLWebpackPluginOptions} from '../../plugins/interfaces/html-webpack-plugin-options.interface';
import {type IDefinePluginOptions} from '../../plugins/interfaces/define-plugin-options.interface';

export type IWebpackPluginBuilderOptions = {
	htmlPluginOptions: IHTMLWebpackPluginOptions;
	definePluginOptions: IDefinePluginOptions;
};
