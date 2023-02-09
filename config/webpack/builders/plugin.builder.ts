import {htmlPlugin} from '../plugins/html.plugin';
import {progressPlugin} from '../plugins/progress.plugin';
import {type WebpackPluginBuilderOptions} from './types/plugin-builder-options.type';
import {miniCSSExtractPlugin} from '../plugins/mini-css-extract.plugin';
import {definePlugin} from '../plugins/define.plugin';
import {hmrPlugin} from '../plugins/hmr.plugin';
import {bundleAnalyzerPlugin} from '../plugins/bundle-analyzer.plugin';

export class PluginBuilder {
	build({htmlPluginOptions, definePluginOptions}: WebpackPluginBuilderOptions) {
		const basePlugins = [
			htmlPlugin(htmlPluginOptions),
			progressPlugin(),
			miniCSSExtractPlugin(),
			definePlugin(definePluginOptions),
			hmrPlugin(),
		];

		if(definePluginOptions.isDev) {
			basePlugins.push(bundleAnalyzerPlugin())
		}

		return basePlugins
	}
}
