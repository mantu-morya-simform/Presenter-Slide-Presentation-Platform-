import { getImages, showImage } from "../imageViewer/imageViewer";
import { imageIndex } from "../imageViewer/slide-data";
import { isDragable } from "./dragabbleState";
import { selectImage } from "./selectImage";


//change image by step we provide
export function changeImage(step: number){
    isDragable(false);
    const newIndex = imageIndex.startIndex + step;
    if(newIndex<0 || newIndex>=getImages().length) return;
    imageIndex.startIndex=newIndex;
    selectImage(newIndex);
    showImage(newIndex);
}