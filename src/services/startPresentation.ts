import { startPresentationButtonElement } from '../Dom/dom';

/**
 * Opens the presentation viewer in a new tab and updates button text.
 * Attaches click event only if the button element exists.
 */
export function startPresentation() {
  const button = startPresentationButtonElement;
  if (!button) return;
  button.addEventListener('click', () => {
    window.open('viewer.html', '_blank');
    button.textContent = 'End Presentation';
  });
}
