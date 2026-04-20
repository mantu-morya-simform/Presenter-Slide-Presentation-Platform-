import { startPresentationButtonElement } from '../imageViewer/slide-ui';
import { isDragable } from '../utills/dragabbleState';

/**
 * Opens the presentation viewer in a new tab and updates button text.
 * Attaches click event only if the button element exists.
 */

export function startPresentation() {
  startPresentationButtonElement?.addEventListener('click', () => {
    // Lock reordering only while presentation is actively started in this tab.
    isDragable(false);
    window.open('/viewer.html', '_blank');
  });
}
