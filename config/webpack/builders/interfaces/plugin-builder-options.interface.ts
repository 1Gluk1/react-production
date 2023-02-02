import { IHTMLWebpackPluginOptions } from "../../plugins/interfaces/html-webpack-plugin-options.interface";
import { IDefinePluginOptions } from '../../plugins/interfaces/define-plugin-options.interface';

export interface IWebpackPluginBuilderOptions {
    htmlPluginOptions: IHTMLWebpackPluginOptions,
    definePluginOptions: IDefinePluginOptions,
}