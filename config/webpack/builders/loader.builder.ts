import {type RuleSetRule} from 'webpack';
import {typescriptLoader} from '../loaders/typescript.loader';
import {sassLoader} from '../loaders/sass.loader';
import {type LoaderBuilderOptions} from './types/loader-builder-options.type';
import {svgLoader} from '../loaders/svg.loader';
import {fileLoader} from '../loaders/file.loader';
import {babelLoader} from '../loaders/babel.loader';

export class LoaderBuilder {
	build(options: LoaderBuilderOptions): RuleSetRule[] {
		return [
			babelLoader(),
			typescriptLoader(),
			sassLoader(options.sassOptions),
			svgLoader(),
			fileLoader(),
		];
	}
}
