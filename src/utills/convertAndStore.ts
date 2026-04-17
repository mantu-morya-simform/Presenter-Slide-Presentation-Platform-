import type { ImageData } from '../models/type/imageDataType';
import { renderSlide } from '../services/renderSlide';
import { dragImage } from '../services/dragImage';
import { addImage, getAllImages } from '../db/store';
/**
 * Converts an uploaded file to base64, stores it in localStorage, and updates the UI.
 * Re-renders slides, re-initializes drag, and resets the file input.
 */
export function convertAndStore(
  file: File,
  imageElement: HTMLElement | null,
  imageInput: HTMLInputElement | null
) {
  const reader = new FileReader();

  reader.onload = async () => {
    if (typeof reader.result !== 'string') return;
    const base64Path: string = reader.result;

    const data: ImageData = {
      name: file.name,
      path: base64Path,
      createdAt: new Date(),
    };

    addImage(data);

    renderSlide(imageElement); // refresh UI
    dragImage(); // initilize drag & drop on New Image also

    if (imageInput) {
      imageInput.value = ''; // reset input
    }
  };

  reader.readAsDataURL(file);
}
