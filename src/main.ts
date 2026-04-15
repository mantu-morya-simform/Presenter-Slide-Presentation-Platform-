import {
  imageSaveButton,
  imageInput,
  imageElement,
  allimgElements,
} from "./Dom/dom";

import { saveImage } from "./services/saveImage";
import { renderSlide } from "./services/renderSlide";
import { dragImage } from "./services/dragImage";

/* Init */
saveImage(imageSaveButton, imageInput, imageElement);
renderSlide(imageElement);

/* drag and chenge the order of image  */

dragImage(allimgElements);
