import { startPresentationButtonElement } from '../Dom/dom';

/**
 * Opens the presentation viewer in a new tab and updates button text.
 * Attaches click event only if the button element exists.
 */

export function startPresentation(){
  const btn=startPresentationButtonElement;
  if(!btn)return;
  btn.addEventListener('click', () => {
    window.open('/viewer.html', '_blank');
    btn.textContent = 'End Presentation';
  });
}

 