import {
  AbstractLoader,
  type ILoader,
  type ICallbackArticles,
  type ICallbackSources,
  type IOptions,
  type IResp,
  type IRespSources,
  type IRespArticles,
  HttpStatus,
} from '../model';

class Loader extends AbstractLoader implements ILoader {
  protected errorHandler(res: Response): Response | never {
    if (!res.ok) {
      const unauthorized: number = HttpStatus.Unauthorized;
      const notFound: number = HttpStatus.NotFound;
      if (res.status === unauthorized || res.status === notFound)
        console.warn(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  protected getResp(
    { endpoint, options = {} }: Readonly<IResp>,
    callback = () => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  protected makeUrl(options: Readonly<IOptions>, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach(key => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  protected load(method: string, endpoint: string, callback: ICallbackSources | ICallbackArticles, options = {}): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(res => this.errorHandler(res))
      .then(res => res.json())
      .then((data: unknown) => {
        const typedData = data as (IRespSources & IRespArticles) | undefined;
        callback(typedData);
      })
      .catch(err => console.error(err));
  }
}

export default Loader;
