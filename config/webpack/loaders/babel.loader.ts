import {RuleSetRule} from 'webpack';

export function babelLoader(): RuleSetRule {
    return {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                // plugins: [
                //     [
                //         "i18next-extract",
                //         {
                //             locales: ['ru', 'en'],
                //             keyAsDefaultValue: false,
                //             saveMissing: true,
                //             outputPath: 'public/locales/test/{{locale}}/{{ns}}.json',
                //         }
                //     ],
                // ]
            }
        },
    }
}