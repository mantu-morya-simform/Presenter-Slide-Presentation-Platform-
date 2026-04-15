import { swapImages } from '../utills/swapImages';
import { gameState } from '../models/appState';

export function dragImage() {
  let selectedElement: HTMLImageElement | null = null;
  let targetElement: HTMLImageElement | null = null;

  console.log(gameState);

  const draggableImages = document.querySelectorAll('.img') as NodeListOf<HTMLImageElement>;

  draggableImages.forEach((img) => {
    img.addEventListener('dragstart', (e: MouseEvent) => {
      const target = e.target;
      if (target instanceof HTMLImageElement) {
        selectedElement = target;
      }
    });

    img.addEventListener('dragover', (e: MouseEvent) => {
      e.preventDefault();
    });

    img.addEventListener('drop', (e: MouseEvent) => {
      e.preventDefault();

      const target = e.target;
      if (target instanceof HTMLImageElement) {
        targetElement = target;
      }

      /**
       *   swapImages is a utill function that create a temp image-element and swap the selected and target image-element
       */
      if (selectedElement && targetElement && gameState.isDragAllow) {
        swapImages(selectedElement, targetElement);
      }
    });
  });
}
