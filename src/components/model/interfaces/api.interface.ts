export interface IOptions {
  [key: string]: string;
}

export interface IResp {
  endpoint: string;
  options?: Readonly<IOptions>;
}

export interface ISource<T = string> {
  id: T;
  name: T;
}

export interface IDate {
  source: ISource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface IRespArticles {
  articles: IDate[];
}

export interface IRespSources {
  sources?: Array<IOptions | undefined>;
}
