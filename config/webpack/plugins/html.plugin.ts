import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance } from "webpack";
import { IHTMLWebpackPluginOptions } from "./interfaces/html-webpack-plugin-options.interface";

export function htmlPlugin({ pathToTemplate }: IHTMLWebpackPluginOptions): WebpackPluginInstance {
    return new HtmlWebpackPlugin({
        template: pathToTemplate
    })
}