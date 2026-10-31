import { ApiEndpoint, type IAppController, type ICallbackArticles, type ICallbackSources } from '../model';

import AppLoader from './appLoader';

class AppController extends AppLoader implements IAppController {
  public getSources(callback: ICallbackSources): void {
    super.getResp(
      {
        endpoint: ApiEndpoint.Sources,
      },
      callback
    );
  }

  public getNews(e: Event, callback: ICallbackArticles): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if (sourceId) {
          if (newsContainer.getAttribute('data-source') !== sourceId) {
            newsContainer.setAttribute('data-source', sourceId);
            super.getResp(
              {
                endpoint: ApiEndpoint.Everything,
                options: {
                  sources: sourceId,
                },
              },
              callback
            );
          }
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
