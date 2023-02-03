import {htmlPlugin} from '../plugins/html.plugin';
import {progressPlugin} from '../plugins/progress.plugin';
import {type IWebpackPluginBuilderOptions} from './interfaces/plugin-builder-options.interface';
import {miniCSSExtractPlugin} from '../plugins/mini-css-extract.plugin';
import {definePlugin} from '../plugins/define.plugin';
import {hmrPlugin} from '../plugins/hmr.plugin';

export class PluginBuilder {
	build({htmlPluginOptions, definePluginOptions}: IWebpackPluginBuilderOptions) {
		return [
			htmlPlugin(htmlPluginOptions),
			progressPlugin(),
			miniCSSExtractPlugin(),
			definePlugin(definePluginOptions),
			hmrPlugin(),
		];
	}
}
