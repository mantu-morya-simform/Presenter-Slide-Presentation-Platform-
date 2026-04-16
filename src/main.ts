import { imageEl, leftClick, rightClick } from './imageViewer/slide-ui';
import { showImage, nextImage, prevImage } from './imageViewer/imageViewer';
import { imageSaveButton, imageInput, imageElement } from './Dom/dom';
import { saveImage } from './services/saveImage';
import { renderSlide } from './services/renderSlide';
import { dragImage } from './services/dragImage';
import { deleteSelected } from './services/deleteSelected';
import { startPresentation } from './services/startPresentation';
import { isDragable } from './utills/dragabbleState';
import { selectImage } from './utills/selectImage';

//null check
if (!imageEl || !leftClick || !rightClick) {
  throw new Error('Buttons not found');
}

//works for run time image add too
imageEl.addEventListener('click', (e: Event) => {
  const target = e.target;
  if (target instanceof HTMLImageElement) {
    isDragable(false);
    if (!imageEl) return;
    const images: NodeListOf<HTMLImageElement> = imageEl.querySelectorAll('img');
    const index = Array.from(images).indexOf(target);
    selectImage(Number(index));
    showImage(index);
  }
});

//initial state
leftClick.disabled = true;

//button click image chang
rightClick.addEventListener('click', nextImage);
leftClick.addEventListener('click', prevImage);

/* Init */
saveImage(imageSaveButton, imageInput, imageElement);

if (imageElement) {
  renderSlide(imageElement);
}

/* drag and change the order of image */
dragImage();

/* Delete Selected File Path */
deleteSelected();

/* Start Presentation Feature */
startPresentation();
