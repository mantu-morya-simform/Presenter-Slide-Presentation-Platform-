import type { ImageData } from '../models/type/imageDataType';

/**
 * Renders all images in the container based on provided data.
 * Clears existing content and appends new <img> elements with index tracking.
 */
export function createAndAppendImage(imageElement: HTMLElement | null, allImageData: ImageData[]) {
  if (!imageElement) return;
  imageElement.innerHTML = '';
  allImageData.forEach((data, index) => {
    const img = document.createElement('img');
    img.src = data.path;
    img.alt = data.name;
    img.dataset.index = index.toString();
    img.classList.add('img');
    imageElement.appendChild(img);
  });
}
