import { imageEl,imageStore,leftClick,rightClick } from "./slide-ui";
import { imageIndex } from "./slide-data";
import { createImage } from "../utills/createImage";
import { isDragable } from "../utills/dragabbleState";

//fn to fetch the image from sidebar
export function getImages(){
    return imageEl ? Array.from(imageEl.querySelectorAll('img')) : [];
}

//fn to update the button state
function updateButton(index:number){
    if(!leftClick || !rightClick)return;
    const img=getImages();
    leftClick.disabled=(index===0);
    rightClick.disabled=(index===img.length-1);
}

//fn to create image and render
export function showImage(index:number){
    const images=getImages();
    if(!imageStore) return;
    imageStore.innerHTML='';
    imageStore.appendChild(createImage(images[index].src, images[index].alt));
    imageIndex.startIndex=index;
    updateButton(index);
}

//fn to get previous image on clicking the left button
export function prevImage(){
    isDragable(false);
    imageIndex.startIndex--;
    showImage(imageIndex.startIndex);
    updateButton(imageIndex.startIndex);
}
//fn to get previous image on clicking the right button
export function nextImage(){
    isDragable(false);
    imageIndex.startIndex++;
    showImage(imageIndex.startIndex);
    updateButton(imageIndex.startIndex);
}