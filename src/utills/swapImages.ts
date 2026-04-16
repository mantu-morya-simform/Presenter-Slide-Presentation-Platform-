/**
 * Swaps two images using their indexes and updates localStorage.
 * Reloads the page to reflect the new image order.
 */
export function swapImages(selectedElement: HTMLImageElement, targetElement: HTMLImageElement) {
  /* it take the selectedElement and targetElement and swap them with indexes also for suffling */
  if (selectedElement && targetElement !== selectedElement) {
    const selectedIndex = Number(selectedElement.dataset.index);
    const targetIndex = Number(targetElement.dataset.index);

    const allImageData = JSON.parse(localStorage.getItem('imageData') || '[]');

    [allImageData[selectedIndex], allImageData[targetIndex]] = [
      allImageData[targetIndex],
      allImageData[selectedIndex],
    ];

    localStorage.setItem('imageData', JSON.stringify(allImageData));
    location.reload();
  }
}
