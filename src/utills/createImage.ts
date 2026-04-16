export function createImage(src:string,alt:string):HTMLImageElement{
    const img = document.createElement('img');
    img.className='image';
    img.src=src;
    img.alt=alt;
    return img;
}