const imageSaveButton = document.querySelector(
  ".img-save-btn",
) as HTMLButtonElement | null;

const imageInput = document.querySelector(
  ".imageInput",
) as HTMLInputElement | null;

const imageElement = document.querySelector(".images") as HTMLElement | null;

const allimgElements = document.querySelectorAll(
  ".img",
) as NodeListOf<HTMLImageElement> | null;

export { imageSaveButton, imageInput, imageElement, allimgElements };
