import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import {type IDevServerBuilderOptions} from './interfaces/dev-server-builder-options.interface';

export class DevServerBuilder {
	build({port}: IDevServerBuilderOptions): DevServerConfiguration {
		return {
			port,
			open: true,
			historyApiFallback: true,
		};
	}
}
