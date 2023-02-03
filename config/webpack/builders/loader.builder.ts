import {type RuleSetRule} from 'webpack';
import {typescriptLoader} from '../loaders/typescript.loader';
import {sassLoader} from '../loaders/sass.loader';
import {type ILoaderBuilderOptions} from './interfaces/loader-builder-options.interface';
import {svgLoader} from '../loaders/svg.loader';
import {fileLoader} from '../loaders/file.loader';
import {babelLoader} from '../loaders/babel.loader';

export class LoaderBuilder {
	build(options: ILoaderBuilderOptions): RuleSetRule[] {
		return [
			babelLoader(),
			typescriptLoader(),
			sassLoader(options.sassOptions),
			svgLoader(),
			fileLoader(),
		];
	}
}
