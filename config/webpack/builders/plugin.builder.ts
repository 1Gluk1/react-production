import { htmlPlugin } from "../plugins/html.plugin";
import { progressPlugin} from "../plugins/progress.plugin";
import { IWebpackPluginBuilderOptions } from "./interfaces/plugin-builder-options.interface";
import { miniCSSExtractPlugin } from "../plugins/mini-css-extract.plugin";

export class PluginBuilder {
    build({ htmlPluginOptions }: IWebpackPluginBuilderOptions) {
        return [
            htmlPlugin(htmlPluginOptions),
            progressPlugin(),
            miniCSSExtractPlugin(),
        ];
    }
}