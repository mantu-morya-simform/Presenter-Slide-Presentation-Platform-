import type { ImageData } from "../models/type/imageDataType";
import { renderSlide } from "../services/renderSlide";
import { dragImage } from "../services/dragImage";
export function convertAndStore(
  file: File,
  imageElement: HTMLElement | null,
  imageInput: HTMLInputElement | null,
) {
  const reader = new FileReader();

  reader.onload = () => {
    const base64Path = reader.result as string;

    const allImageData: ImageData[] = JSON.parse(
      localStorage.getItem("imageData") || "[]",
    );

    allImageData.push({ path: base64Path, name: file.name });
    localStorage.setItem("imageData", JSON.stringify(allImageData));
    renderSlide(imageElement); // refresh UI
    dragImage(); // initilize drag & drop on New Image also

    if (imageInput) {
      imageInput.value = ""; // reset input
    }
  };

  reader.readAsDataURL(file);
}
