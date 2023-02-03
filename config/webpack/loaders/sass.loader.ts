import {type RuleSetRule} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {type SASSLoaderOptions} from './types/sass-loader-options.interface';

export function sassLoader({isNeedExtractCss, isNeedLoadIndentName}: SASSLoaderOptions): RuleSetRule {
	return {
		test: /\.s[ac]ss$/i,
		use: [
			isNeedExtractCss ? MiniCssExtractPlugin.loader : 'style-loader',
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: /\.module.s[ac]ss$/i,
						localIdentName: isNeedLoadIndentName
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]',
					},
				},
			},
			'sass-loader',
		],
		exclude: /node_modules/,
	};
}
