import { CarouselDirection } from '../../model';

class Carousel {
  private currentItem: number;

  private isEnable: boolean;

  constructor() {
    this.currentItem = 0;
    this.isEnable = true;
  }

  public start(): void {
    const arrowLeft = document.getElementById('menu__left-arrow');
    const arrowRight = document.getElementById('menu__right-arrow');
    const itemsList: NodeListOf<HTMLElement> = document.querySelectorAll('.source__wrapper');

    const changeCurrentItem = (n: number): void => {
      this.currentItem = (n + itemsList.length) % itemsList.length;
    };

    const hideItem = (direction: string): void => {
      this.isEnable = false;
      itemsList[this.currentItem]?.classList.add(direction);
      itemsList[this.currentItem]?.addEventListener('animationend', function () {
        this.classList.remove('active', direction);
      });
    };

    const showItem = (direction: string): void => {
      itemsList[this.currentItem]?.classList.add('next', direction);
      itemsList[this.currentItem]?.addEventListener('animationend', () => {
        itemsList[this.currentItem]?.classList.remove('next', direction);
        itemsList[this.currentItem]?.classList.add('active');
        this.isEnable = true;
      });
    };

    const previousItem = (n: number): void => {
      hideItem(CarouselDirection.ToRight);
      changeCurrentItem(n - 1);
      showItem(CarouselDirection.Left);
    };

    const nextItem = (n: number): void => {
      hideItem(CarouselDirection.ToLeft);
      changeCurrentItem(n + 1);
      showItem(CarouselDirection.Right);
    };

    arrowRight?.addEventListener('click', () => {
      if (this.isEnable) {
        previousItem(this.currentItem);
      }
    });
    arrowLeft?.addEventListener('click', () => {
      if (this.isEnable) {
        nextItem(this.currentItem);
      }
    });
  }
}

export default Carousel;
