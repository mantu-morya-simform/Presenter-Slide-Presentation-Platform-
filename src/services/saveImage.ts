import { convertAndStore } from '../utills/convertAndStore';

/*   check the file then Convert the image into base64 amd then Save Image into localstorage */
export function saveImage(
  imageSaveButton: HTMLButtonElement | null,
  imageInput: HTMLInputElement | null,
  imageElement: HTMLElement | null
) {
  if (!imageSaveButton || !imageInput) return;

  imageSaveButton.addEventListener('click', () => {
    const file = imageInput.files?.[0];

    if (!file) {
      alert('Please select an image first');
      return;
    }

    // Allow only specific image types
    const allowedTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];

    if (!allowedTypes.includes(file.type)) {
      alert('Only JPG and PNG images are allowed');
      return;
    }

    /**
     *   convertAndStore is a utill function that convert image file into base64 and store into local storage
     */
    convertAndStore(file, imageElement, imageInput);
  });
}
