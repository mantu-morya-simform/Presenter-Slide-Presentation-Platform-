import { getImages, showImage } from "../imageViewer/imageViewer";
import { imageIndex } from "../imageViewer/slide-data";
import { isDragable } from "./dragabbleState";
import { selectImage } from "./selectImage";


//change image by step we provide
export function updateImageByStep(step: number){
    isDragable(false);
    const newIndex = imageIndex.startIndex + step;
    if(newIndex<0 || newIndex>=getImages().length) return;
    imageIndex.startIndex=newIndex;
    selectImage(newIndex);
    showImage(newIndex);
}

//fn to get previous image on clicking the left button
export function prevImage(){
    updateImageByStep(-1);
}

//fn to get previous image on clicking the right button
export function nextImage(){
    updateImageByStep(1);
}