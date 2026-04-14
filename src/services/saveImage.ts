import type { ImageData } from "../models/type/imageDataType";
import { renderSlide } from "./renderSlide";

/* -------- Save Image -------- */
export function saveImage(
  imageSaveButton: HTMLButtonElement | null,
  imageInput: HTMLInputElement | null,
  imageElement: HTMLElement | null,
) {
  if (!imageSaveButton || !imageInput) return;

  imageSaveButton.addEventListener("click", () => {
    console.log(imageInput.files);
    const file = imageInput.files?.[0];

    if (!file) {
      alert("Please select an image first");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const base64Path = reader.result as string;

      const allImageData: ImageData[] = JSON.parse(
        localStorage.getItem("imageData") || "[]",
      );

      allImageData.push({ path: base64Path });

      localStorage.setItem("imageData", JSON.stringify(allImageData));

      renderSlide(imageElement); // refresh UI
      imageInput.value = ""; // reset input
    };

    reader.readAsDataURL(file);
  });
}
