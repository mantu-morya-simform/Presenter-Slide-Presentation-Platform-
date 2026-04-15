import type { ImageData } from "../models/type/imageDataType";
export function createAndAppendImage(
  imageElement: HTMLElement | null,
  allImageData: ImageData[],
) {
  imageElement.innerHTML = "";
  allImageData.forEach((data) => {
    const img = document.createElement("img");
    img.src = data.path;
    img.alt = data.name;
    img.classList.add("img");
    imageElement.appendChild(img);
  });
}
