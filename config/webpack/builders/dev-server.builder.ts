import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import {type DevServerBuilderOptions} from './types/dev-server-builder-options.type';

export class DevServerBuilder {
	build({port}: DevServerBuilderOptions): DevServerConfiguration {
		return {
			port,
			open: true,
			historyApiFallback: true,
		};
	}
}
