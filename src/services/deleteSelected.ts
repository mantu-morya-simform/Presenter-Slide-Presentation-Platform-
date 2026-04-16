import { deleteSelectedFileElement } from '../Dom/dom';
import { deleteSelectedFile } from '../Dom/Action/deleteSelectedFile';

export function deleteSelected() {
  if (!deleteSelectedFileElement) return;

  deleteSelectedFileElement.addEventListener('click', deleteSelectedFile);
}
