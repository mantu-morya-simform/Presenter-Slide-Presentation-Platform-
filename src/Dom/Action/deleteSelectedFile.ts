import { imageInput } from '../dom';
/**
 * Clears the selected file from the input field.
 * Ensures the input element exists before resetting its value.
 */
export function deleteSelectedFile() {
  if (!imageInput) return;
  imageInput.value = ''; // reset input
}
