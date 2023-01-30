import { TYPESCRIPT_EXTENSIONS } from "../resolvers/typescript.resolver";
import { JAVASCRIPT_EXTENSION } from "../resolvers/javascript.resolver";

export class ResolverBuilder {
    build() {
        return {
            extensions: [
                ...TYPESCRIPT_EXTENSIONS,
                JAVASCRIPT_EXTENSION,
            ],
        }
    }
}