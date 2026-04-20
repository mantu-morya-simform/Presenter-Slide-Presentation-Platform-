import { imageEl, imageStore, leftClick, rightClick } from './slide-ui';
import { imageIndex } from './slide-data';
import { createImage } from '../utills/createImage';

//fn to fetch the image from sidebar
export function getImages() {
  return imageEl ? Array.from(imageEl.querySelectorAll('img')) : [];
}

//fn to update the button state
export function updateButton(index: number){
  if (!leftClick || !rightClick) return;
  const img = getImages();
  leftClick.disabled = index === 0;
  rightClick.disabled = index === img.length - 1;
}

//fn to create image and render
export function showImage(index: number){
  const images = getImages();
  if (!imageStore) return;
  imageStore.innerHTML = '';
  imageStore.appendChild(createImage(images[index].src, images[index].alt));
  imageIndex.startIndex = index;
  updateButton(index);
}

//enable fullscreen mode and exit fullscreen mode
export function toggleFullscreen(button:HTMLButtonElement){
  if(!document.fullscreenElement){
    document.documentElement.requestFullscreen();
    button.textContent='Exit fullscreen';
  } 
  else{
    document.exitFullscreen();
    button.textContent='Go fullscreen';
  }
}