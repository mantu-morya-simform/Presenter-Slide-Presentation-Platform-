export function swapImages(
  selectedElement: HTMLImageElement,
  targetElement: HTMLImageElement,
) {
  if (selectedElement && targetElement !== selectedElement) {
    let parentElement = targetElement.parentNode as HTMLElement;
    let temp = document.createElement("img") as HTMLImageElement;
    /* swap these both selected and target image */
    parentElement?.replaceChild(temp, selectedElement);
    parentElement?.replaceChild(selectedElement, targetElement);
    parentElement?.replaceChild(targetElement, temp);
  }
}
