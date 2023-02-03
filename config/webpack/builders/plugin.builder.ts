import {htmlPlugin} from '../plugins/html.plugin';
import {progressPlugin} from '../plugins/progress.plugin';
import {type WebpackPluginBuilderOptions} from './types/plugin-builder-options.type';
import {miniCSSExtractPlugin} from '../plugins/mini-css-extract.plugin';
import {definePlugin} from '../plugins/define.plugin';
import {hmrPlugin} from '../plugins/hmr.plugin';

export class PluginBuilder {
	build({htmlPluginOptions, definePluginOptions}: WebpackPluginBuilderOptions) {
		return [
			htmlPlugin(htmlPluginOptions),
			progressPlugin(),
			miniCSSExtractPlugin(),
			definePlugin(definePluginOptions),
			hmrPlugin(),
		];
	}
}
