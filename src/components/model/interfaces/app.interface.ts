import type { ICallbackArticles, ICallbackSources } from '../types';
import type { IDate, IOptions, IRespArticles, IRespSources } from './api.interface';

export interface IAppController {
  getSources: (callback: ICallbackSources) => void;
  getNews: (e: Event, callback: ICallbackArticles) => void;
}

export interface INews {
  draw: (data: IDate[]) => void;
}

export interface INewsSources {
  draw: (data: Array<IOptions | undefined>) => void;
}

export interface IAppView {
  readonly news: INews;
  readonly sources: INewsSources;
  drawNews: (data?: IRespArticles) => void;
  drawSources: (data?: IRespSources) => void;
}

export interface IApp {
  readonly start: () => void;
}
