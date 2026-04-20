import { prevImage, nextImage } from "./imageViewer";
import { ArrowKey } from "./slide-data";

export function keyboardNavigation(){
    document.addEventListener('keydown',(e)=>{
        if(e.key===ArrowKey.LEFT){
          prevImage();
        }
        if(e.key===ArrowKey.RIGHT){
          nextImage();
        }
    })
}
