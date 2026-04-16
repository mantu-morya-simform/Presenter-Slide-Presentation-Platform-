import { imageSaveButton, imageInput, imageElement } from './Dom/dom';

import { saveImage } from './services/saveImage';
import { renderSlide } from './services/renderSlide';
import { dragImage } from './services/dragImage';
import { deleteSelected } from './services/deleteSelected';
import { startPresentation } from './services/startPresentation';

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
