import { convertAndStore } from "../utills/convertAndStore";

/*   Save Image */
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
    /**
     *   convertAndStore is a utill function that convert image file into base64 and store into local storage
     */
    convertAndStore(file, imageElement, imageInput);
  });
}
