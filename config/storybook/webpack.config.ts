import {Configuration, RuleSetRule} from 'webpack';
import {ResolverBuilderOptions} from '../webpack/builders/types/resolver-builder-options.type';
import {resolve} from 'path';
import {sassLoader} from '../webpack/loaders/sass.loader';
import {svgLoader} from '../webpack/loaders/svg.loader';

export default ({config}: {config: Configuration} ) => {
    const { srcPath }: ResolverBuilderOptions = {srcPath: resolve(__dirname, '..', '..', 'src')};
    config.resolve.modules.push(srcPath);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push(svgLoader());

    config.module.rules.push(sassLoader({isNeedExtractCss: false, isNeedLoadIndentName: true}))

    return config;
}
