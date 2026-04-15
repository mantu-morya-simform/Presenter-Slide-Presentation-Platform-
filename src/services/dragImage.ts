import { swapImages } from "../utills/swapImages";

export function dragImage() {
  let selectedElement: HTMLImageElement | null = null;
  let targetElement: HTMLImageElement | null = null;

  const allimgElements = document.querySelectorAll(
    ".img",
  ) as NodeListOf<HTMLImageElement>;

  allimgElements.forEach((img) => {
    img.addEventListener("dragstart", (e: MouseEvent) => {
      selectedElement = e.target as HTMLImageElement;
    });

    img.addEventListener("dragover", (e: MouseEvent) => {
      e.preventDefault();
    });

    img.addEventListener("drop", (e: MouseEvent) => {
      e.preventDefault();
      targetElement = e.target as HTMLImageElement;
      /**
       *   swapImages is a utill function that create a temp image-element and swap the selected and target image-element
       */
      if (selectedElement && targetElement) {
        swapImages(selectedElement, targetElement);
      }
    });
  });
}
