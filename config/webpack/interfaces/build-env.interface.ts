import {Configuration} from "webpack";

export interface IBuildEnv {
    mode: Configuration['mode'];
    port: number;
}