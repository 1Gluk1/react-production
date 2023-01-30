import { RuleSetRule } from "webpack";
import { typescriptLoader } from "../loaders/typescript.loader";
import { sassLoader } from "../loaders/sass.loader";
import { ILoaderBuilderOptions } from "./interfaces/loader-builder-options.interface";

export class LoaderBuilder {
    build(options: ILoaderBuilderOptions): RuleSetRule[] {
        return [
            typescriptLoader(),
            sassLoader(options.sassOptions)
        ]
    }
}