import {type WebpackPluginInstance} from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export function hmrPlugin(): WebpackPluginInstance {
	return new ReactRefreshWebpackPlugin();
}
