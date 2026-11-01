import { isHTMLElement, type INewsSources, type ISources } from '../../model';
import Carousel from '../carousel/carousel';

import './sources.css';

class Sources implements INewsSources {
  private readonly carousel: Carousel;

  constructor() {
    this.carousel = new Carousel();
  }

  public draw(data: ISources): void {
    const arraySeparatElements: ISources[] = [];
    let count = 0;
    while (count < data.length) {
      arraySeparatElements.push([data[count], data[count + 1], data[count + 2]]);
      count += 3;
    }

    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    if (!sourceItemTemp) {
      return;
    }

    data.forEach((item, index) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
      if (index > 0) {
        (sourceClone.querySelector('.source__wrapper') as HTMLElement).classList.remove('active');
      }

      const sourceNameElement = sourceClone.querySelector('.source__item-name');
      const sourceItemElement = sourceClone.querySelector('.source__item');

      if (isHTMLElement(sourceNameElement) && isHTMLElement(sourceItemElement) && item && item.name && item.id) {
        sourceNameElement.textContent = item.name;
        sourceItemElement.setAttribute('data-source-id', item.id);
      }

      fragment.append(sourceClone);
    });

    const sourcesContainer = document.querySelector('.sources');
    if (isHTMLElement(sourcesContainer)) {
      sourcesContainer.append(fragment);
      this.carousel.start();
    }
  }
}

export default Sources;
