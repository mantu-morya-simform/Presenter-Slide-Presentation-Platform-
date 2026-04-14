import { saveImage } from "./services/saveImage";
import { renderSlide } from "./services/renderSlide";

const imageSaveButton = document.querySelector(
  ".img-save-btn",
) as HTMLButtonElement | null;

const imageInput = document.querySelector(
  ".imageInput",
) as HTMLInputElement | null;

const imageElement = document.querySelector(".images") as HTMLElement | null;

/* -------- Init -------- */
saveImage(imageSaveButton, imageInput, imageElement);
renderSlide(imageElement);
