import type { ImageData } from '../models/type/imageDataType';
import { createAndAppendImage } from '../utills/createAndAppendImage';

/* -------- Render Images -------- */
export function renderSlide(imageElement: HTMLElement | null) {
  if (!imageElement) return;

  const allImageData: ImageData[] = JSON.parse(localStorage.getItem('imageData') || '[]');
  /**
   *   createAndAppendImage is a utill function that create image-element for each image whcich store into the local storage and append to its parent
   */
  createAndAppendImage(imageElement, allImageData);
}
