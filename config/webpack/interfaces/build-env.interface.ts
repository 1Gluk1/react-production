import {type Configuration} from 'webpack';

export type IBuildEnv = {
	mode: Configuration['mode'];
	port: number;
};
