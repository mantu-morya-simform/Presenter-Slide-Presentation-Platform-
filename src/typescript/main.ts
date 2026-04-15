import { images,imageStore,leftClick,rightClick } from "./slide-ui";
import { imageIndex } from './slide-data'

//left/right button check
function updateButton(index:number){
    leftClick.disabled=(index===0);
    rightClick.disabled=(index===images.length-1);
}

//accessing all image
images.forEach((img:HTMLImageElement,index:number)=>{    
    img.addEventListener('click',()=>{
        imageStore.innerHTML=`
            <img class="image" src="${img.src}" alt="dummpy img">
        `
        imageIndex.startIndex=index;
        updateButton(imageIndex.startIndex);
    })
})

//swap image by click on rightArrow 
rightClick.addEventListener('click',()=>{
    imageIndex.startIndex++;
    imageStore.innerHTML=`
            <img class="image" src="${images[imageIndex.startIndex].src}" alt="dummpy img">
        `
    updateButton(imageIndex.startIndex);
})
//swap image by click on rightArrow 
leftClick.disabled=true;
leftClick.addEventListener('click',()=>{
    imageIndex.startIndex--;
    imageStore.innerHTML=`
            <img class="image" src="${images[imageIndex.startIndex].src}" alt="dummpy img">
        `
    updateButton(imageIndex.startIndex);
})