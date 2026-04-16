import type { ImageData } from '../models/type/imageDataType';

/* it is use to create and append element to imageElemet that is parent(hold all the images) */
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
