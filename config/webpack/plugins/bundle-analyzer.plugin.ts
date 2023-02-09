import {type WebpackPluginInstance} from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

export function bundleAnalyzerPlugin(): WebpackPluginInstance {
	return new BundleAnalyzerPlugin(
		{openAnalyzer: true},
	);
}
