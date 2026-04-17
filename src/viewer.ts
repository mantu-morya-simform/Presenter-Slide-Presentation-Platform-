import { postMessageType } from './constants/constantsType';

const channel = new BroadcastChannel('preview_sync');

const img = document.querySelector<HTMLImageElement>('.presentation-img');

/**
 * Listens for image update messages from other tabs/windows
 * and updates the presentation view accordingly.
 *
 * - Subscribes to the "preview_sync" BroadcastChannel.
 * - Waits for messages of type "UPDATE_IMAGE".
 * - When received, updates the <img> element's `src`
 *   to display the selected image in real-time.
 *
 * Ensures synchronization between the editor and
 * the presentation viewer.
 */
channel.onmessage = (event) => {
  if (event.data?.type === postMessageType && img) {
    img.src = event.data.image;
  }
};
