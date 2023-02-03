import {TYPESCRIPT_EXTENSIONS} from '../resolvers/typescript.resolver';
import {JAVASCRIPT_EXTENSION} from '../resolvers/javascript.resolver';
import {type ResolveOptions} from 'webpack';
import {type ResolverBuilderOptions} from './types/resolver-builder-options.type';

export class ResolverBuilder {
	build({srcPath}: ResolverBuilderOptions): ResolveOptions {
		return {
			extensions: [
				...TYPESCRIPT_EXTENSIONS,
				JAVASCRIPT_EXTENSION,
			],
			preferAbsolute: true,
			mainFiles: ['index'],
			modules: [srcPath, 'node_modules'],
			alias: {},
		};
	}
}
