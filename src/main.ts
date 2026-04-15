import { imageSaveButton, imageInput, imageElement } from './Dom/dom';

import { saveImage } from './services/saveImage';
import { renderSlide } from './services/renderSlide';
import { dragImage } from './services/dragImage';
import { deleteSelected } from './services/deleteSelected';

/* Init */
saveImage(imageSaveButton, imageInput, imageElement);

if (imageElement) {
  renderSlide(imageElement);
}

/* drag and change the order of image */
dragImage();

/* Delete Selected File Path */
deleteSelected();
