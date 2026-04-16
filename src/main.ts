import { imageElement,leftClick,rightClick } from "./imageViewer/slide-ui";
import { showImage,nextImage,prevImage } from "./imageViewer/imageViewer";

//initial state
leftClick.disabled = true;

//works for run time image add too
imageElement.addEventListener('click',(e:Event)=>{
  const target=e.target as HTMLImageElement;
  if(target.tagName=='IMG'){
    const images:NodeListOf<HTMLImageElement>=imageElement.querySelectorAll('img');
    const index=Array.from(images).indexOf(target);    
    showImage(index);
  }
})

//button click image chang
rightClick.addEventListener('click',nextImage);
leftClick.addEventListener('click',prevImage);