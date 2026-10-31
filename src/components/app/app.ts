import AppController from '../controller/controller';
import AppView from '../view/appView';

import type { IApp } from '../model';

class App implements IApp {
  private readonly controller: AppController;

  private readonly view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public readonly start = (): void => {
    const sources = document.querySelector('.sources');
    if (sources)
      sources.addEventListener('click', e =>
        this.controller.getNews(e, data => {
          if (data) {
            this.view.drawNews(data);
          }
        })
      );
    this.controller.getSources(data => this.view.drawSources(data));
  };
}

export default App;
