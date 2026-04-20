import { imageEl, imageStore, leftClick, rightClick } from './slide-ui';
import { imageIndex } from './slide-data';
import { createImage } from '../utills/createImage';
import { isDragable } from '../utills/dragabbleState';
import { selectImage } from '../utills/selectImage';

//fn to fetch the image from sidebar
export function getImages() {
  return imageEl ? Array.from(imageEl.querySelectorAll('img')) : [];
}

//fn to update the button state
export function updateButton(index: number) {
  if (!leftClick || !rightClick) return;
  const img = getImages();
  leftClick.disabled = index === 0;
  rightClick.disabled = index === img.length - 1;
}

//fn to create image and render
export function showImage(index: number) {
  const images = getImages();
  if (!imageStore) return;
  imageStore.innerHTML = '';
  imageStore.appendChild(createImage(images[index].src, images[index].alt));
  imageIndex.startIndex = index;
  updateButton(index);
}

//change image by step we provide
export function changeImage(step: number){
    isDragable(false);
    const newIndex = imageIndex.startIndex + step;
    if(newIndex<0 || newIndex>=getImages().length) return;
    imageIndex.startIndex=newIndex;
    selectImage(newIndex);
    showImage(newIndex);
    updateButton(newIndex);
}
//fn to get previous image on clicking the left button
export function prevImage() {
    changeImage(-1);
}

//fn to get previous image on clicking the right button
export function nextImage() {
    changeImage(1);
}

//fullscreen functionality
export function screenMode(){
    document.documentElement.requestFullscreen();
}