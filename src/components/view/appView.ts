import News from './news/news';
import Sources from './sources/sources';

import type { IRespArticles, IRespSources } from '../model';

class AppView {
  private readonly news: News;

  private readonly sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data?: IRespArticles): void {
    this.news.draw(data?.articles ?? []);
  }

  public drawSources(data?: IRespSources): void {
    this.sources.draw(data?.sources ?? []);
  }
}

export default AppView;
