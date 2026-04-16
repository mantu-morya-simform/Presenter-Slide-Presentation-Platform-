import { deleteSelectedFileElement } from '../Dom/dom';
import { deleteSelectedFile } from '../Dom/Action/deleteSelectedFile';

/**
 * Attaches a click event to trigger deletion of the selected file.
 * Ensures the element exists before binding the event listener.
 */
export function deleteSelected() {
  if (!deleteSelectedFileElement) return;

  deleteSelectedFileElement.addEventListener('click', deleteSelectedFile);
}
