import { postMessageType } from './constants/constantsType';
import { viewerimgElement } from './Dom/dom';
import { screenMode } from './imageViewer/imageViewer';
import { fullScreen } from './imageViewer/slide-ui';
import { createChannel } from './utills/createChannel';

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

const channel = createChannel();

if (channel)
  channel.onmessage = (event) => {
    if (event.data?.type === postMessageType && viewerimgElement) {
      viewerimgElement.src = event.data.image;
    }
  };

//enable full screen mode 
fullScreen?.addEventListener('click', screenMode);
