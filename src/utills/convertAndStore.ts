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

    const base64Path = reader.result;

    const existingImages = await getAllImages();

    const maxOrder = existingImages.length
      ? Math.max(...existingImages.map((img) => img.order))
      : -1;

    const newImage: ImageData = {
      path: base64Path,
      name: file.name,
      order: maxOrder + 1,
    };

    await addImage(newImage);

    await renderSlide(imageElement);
    dragImage();

    if (imageInput) imageInput.value = '';
  };

  reader.readAsDataURL(file);
}
