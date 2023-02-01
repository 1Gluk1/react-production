import { RuleSetRule } from "webpack";

export function fileLoader(): RuleSetRule {
    return {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [{loader: 'file-loader'}],
    }
}