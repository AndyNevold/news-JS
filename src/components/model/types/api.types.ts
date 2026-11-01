import type { IOptions, IRespArticles, IRespSources } from '../interfaces';

export type ISourcesKeys = IOptions;

export type ISources = Array<IOptions | undefined>;

export type Callback<T = unknown> = (data?: T) => void;

export type ICallbackArticles = Callback<IRespArticles>;

export type ICallbackSources = Callback<IRespSources>;
