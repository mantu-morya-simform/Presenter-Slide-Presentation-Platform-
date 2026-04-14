import { images,imageStore,leftClick,rightClick } from "./slide-ui";
import { imageIndex } from './slide-data'
console.log(images);

//left/right button check
function updateButton(index:Number){
    leftClick.disabled=(index===0);
    rightClick.disabled=(index===images.length-1);
}

//accessing all image
images.forEach((img:HTMLImageElement)=>{
    console.log('image:',img);
    img.addEventListener('click',()=>{
        imageStore.innerHTML=`
            <img class="image" src="${img.src}" alt="image did not uploaded">
        `
    })
})

//swap image by click on rightArrow 
rightClick.addEventListener('click',()=>{
    imageIndex.index++;
    console.log(images[imageIndex.index].src);
    imageStore.innerHTML=`
            <img class="image" src="${images[imageIndex.index].src}" alt="image did not uploaded">
        `
    updateButton(imageIndex.index);
})
//swap image by click on rightArrow 
leftClick.disabled=true;
leftClick.addEventListener('click',()=>{
    imageIndex.index--;
    console.log(imageIndex.index);
    console.log(images[imageIndex.index].src);
    imageStore.innerHTML=`
            <img class="image" src="${images[imageIndex.index].src}" alt="image did not uploaded">
        `
    updateButton(imageIndex.index);
})