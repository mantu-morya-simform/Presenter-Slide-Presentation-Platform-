import { imageEl,imageStore,leftClick,rightClick } from "./slide-ui";
import { imageIndex } from "./slide-data";
import { createImage } from "../utills/createImage";
import { gameState } from "../models/appState";

//fn to fetch the image from sidebar
function getImages():NodeListOf<HTMLImageElement>{
    return imageEl.querySelectorAll('img');
}

//fn to update the button state
function updateButton(index:number){
    const img=getImages();
    leftClick.disabled=(index===0);
    rightClick.disabled=(index===img.length-1);
}

//fn to create image and render
export function showImage(index:number){
    const images=getImages();
    imageStore.innerHTML='';
    imageStore.appendChild(createImage(images[index].src, 'dummy-img'));
    imageIndex.startIndex=index;
    updateButton(index);
}

//fn to get previous image on clicking the left button
export function prevImage(){
    gameState.isDragAllow = false;
    imageIndex.startIndex--;
    showImage(imageIndex.startIndex);
    updateButton(imageIndex.startIndex);
}
//fn to get previous image on clicking the right button
export function nextImage(){
    gameState.isDragAllow = false;
    imageIndex.startIndex++;
    showImage(imageIndex.startIndex);
    updateButton(imageIndex.startIndex);
}