import {ProgressPlugin, type WebpackPluginInstance} from 'webpack';

export function progressPlugin(): WebpackPluginInstance {
	return new ProgressPlugin();
}
