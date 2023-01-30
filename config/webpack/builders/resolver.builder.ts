import { TYPESCRIPT_EXTENSIONS } from "../resolvers/typescript.resolver";
import { JAVASCRIPT_EXTENSION } from "../resolvers/javascript.resolver";
import { ResolveOptions } from "webpack";
import {IResolverBuilderOptions} from "./interfaces/resolver-builder-options.interface";

export class ResolverBuilder {
    build({ srcPath }: IResolverBuilderOptions): ResolveOptions {
        return {
            extensions: [
                ...TYPESCRIPT_EXTENSIONS,
                JAVASCRIPT_EXTENSION,
            ],
            preferAbsolute: true,
            mainFiles: ['index'],
            modules: [srcPath, 'node_modules'],
            alias: {},
        }
    }
}