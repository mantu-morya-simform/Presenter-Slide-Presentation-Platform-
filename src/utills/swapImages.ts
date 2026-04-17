import { swapImageOrder } from '../db/store';
import { imageElement } from '../Dom/dom';
import { dragImage } from '../services/dragImage';
import { renderSlide } from '../services/renderSlide';

/**
 * Swaps two images using their indexes and updates localStorage.
 * Reloads the page to reflect the new image order.
 */

export async function swapImages(
  selectedElement: HTMLImageElement,
  targetElement: HTMLImageElement
) {
  if (selectedElement === targetElement) return;

  const selectedIndex = Number(selectedElement.dataset.index);
  const targetIndex = Number(targetElement.dataset.index);

  await swapImageOrder(selectedIndex, targetIndex);

  if (imageElement) {
    await renderSlide(imageElement);
  }
  dragImage();
}
