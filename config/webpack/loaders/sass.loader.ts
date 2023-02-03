import {type RuleSetRule} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {type ISASSLoaderOptions} from './interfaces/sass-loader-options.interface';

export function sassLoader({isNeedExtractCss, isNeedLoadIndentName}: ISASSLoaderOptions): RuleSetRule {
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
