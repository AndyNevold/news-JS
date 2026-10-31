import type { IDate, INews } from '../../model';
import './news.css';

class News implements INews {
  public draw(data: IDate[]): void {
    const news = data.length >= 10 ? data.filter((_item, idx: number) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

    if (!newsItemTemp) return;

    news.forEach((item, idx: number) => {
      const newsItemTempContent = newsItemTemp.content;
      const newsClone = newsItemTempContent.cloneNode(true) as DocumentFragment;
      const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');

      if (idx % 2 && newsItem) newsItem.classList.add('alt');

      const photo = newsClone.querySelector('.news__meta-photo') as HTMLElement;
      if (photo) photo.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

      const author = newsClone.querySelector('.news__meta-author') as HTMLElement;
      if (author) author.textContent = item.author || item.source.name;

      const date = newsClone.querySelector('.news__meta-date') as HTMLElement;
      if (date) date.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

      const title = newsClone.querySelector('.news__description-title') as HTMLElement;
      if (title) title.textContent = item.title;

      const source = newsClone.querySelector('.news__description-source') as HTMLElement;
      if (source) source.textContent = item.source.name;

      const content = newsClone.querySelector('.news__description-content') as HTMLElement;
      if (content) content.textContent = item.description;

      const link = newsClone.querySelector('.news__read-more a') as HTMLAnchorElement;
      if (link) link.setAttribute('href', item.url);

      fragment.append(newsClone);
    });

    const newsContainer = document.querySelector('.news') as HTMLElement;
    if (newsContainer) {
      newsContainer.innerHTML = '';
      newsContainer.appendChild(fragment);
    }
  }
}

export default News;
