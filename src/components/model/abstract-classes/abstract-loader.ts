import type { IOptions, IResp } from '../interfaces';
import type { ICallbackArticles, ICallbackSources } from '../types';

export abstract class AbstractLoader {
  constructor(
    public readonly baseLink: string,
    public readonly options: Readonly<IOptions>
  ) {}

  protected abstract getResp({ endpoint, options }: Readonly<IResp>, callback?: () => void): void;
  protected abstract errorHandler(res: Response): Response | never;
  protected abstract makeUrl(options: Readonly<IOptions>, endpoint: string): string;
  protected abstract load(
    method: string,
    endpoint: string,
    callback: ICallbackSources | ICallbackArticles,
    options?: Readonly<IOptions>
  ): void;
}
