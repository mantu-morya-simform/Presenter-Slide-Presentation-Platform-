import { imageInput } from '../dom';
export function deleteSelectedFile() {
  if (!imageInput) return;
  imageInput.value = ''; // reset input
}
