import { imageEl,leftClick,rightClick } from "./imageViewer/slide-ui";
import { showImage,nextImage,prevImage } from "./imageViewer/imageViewer";
import { gameState } from './models/appState';

import { imageSaveButton, imageInput, imageElement } from './Dom/dom';
import { saveImage } from './services/saveImage';
import { renderSlide } from './services/renderSlide';
import { dragImage } from './services/dragImage';
import { deleteSelected } from './services/deleteSelected';

//initial state
leftClick.disabled = true;

//works for run time image add too
imageEl.addEventListener('click',(e:Event)=>{
  const target=e.target as HTMLImageElement;
  if(target.tagName=='IMG'){
    gameState.isDragAllow = false;
    const images:NodeListOf<HTMLImageElement>=imageEl.querySelectorAll('img');
    const index=Array.from(images).indexOf(target);    
    showImage(index);
  }
})

//button click image chang
rightClick.addEventListener('click',nextImage);
leftClick.addEventListener('click',prevImage);

/* Init */
saveImage(imageSaveButton, imageInput, imageElement);

if (imageElement) {
  renderSlide(imageElement);
}

/* drag and change the order of image */
dragImage();

/* Delete Selected File Path */
deleteSelected();
