const imageSaveButton = document.querySelector<HTMLButtonElement>('.img-save-btn');

const imageInput = document.querySelector<HTMLInputElement>('.imageInput');

const imageElement = document.querySelector<HTMLElement>('.images');

const draggableImages = document.querySelectorAll<HTMLImageElement>('.img');

const deleteSelectedFileElement = document.querySelector<HTMLElement>('.select-file-remove');


export { imageSaveButton, imageInput, imageElement, draggableImages, deleteSelectedFileElement};
