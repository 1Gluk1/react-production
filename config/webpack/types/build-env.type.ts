import {type Configuration} from 'webpack';

export type BuildEnv = {
	mode: Configuration['mode'];
	port: number;
};
