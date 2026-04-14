import type { ImageData } from "../models/type/imageDataType";

/* -------- Render Images -------- */
export function renderSlide(imageElement: HTMLElement | null) {
  if (!imageElement) return;

  const allImageData: ImageData[] = JSON.parse(
    localStorage.getItem("imageData") || "[]",
  );

  imageElement.innerHTML = "";

  allImageData.forEach((data) => {
    const img = document.createElement("img");
    img.src = data.path;
    img.classList.add("img");

    imageElement.appendChild(img);
  });
}
