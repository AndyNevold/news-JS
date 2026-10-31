import News from './news/news';
import Sources from './sources/sources';

import type { IDate, IRespArticles, IRespSources, ISources } from '../model';

class AppView {
  private readonly news: News;

  private readonly sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data?: IRespArticles): void {
    let values: IDate[];
    if (data) {
      values = data.articles ? data.articles : [];
      this.news.draw(values);
    }
  }

  public drawSources(data?: IRespSources): void {
    if (data) {
      const values: ISources = data?.sources ? data?.sources : [];
      this.sources.draw(values);
    }
  }
}

export default AppView;
