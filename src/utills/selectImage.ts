import { createChannel } from './createChannel';

import type { ImageData } from '../models/type/imageDataType';
import { postMessageType } from '../constants/constantsType';

/**
 * Broadcasts the selected image to other tabs for real-time preview sync.
 * Fetches image from localStorage and sends it via BroadcastChannel.
 *
 */

const channel = createChannel();
export function selectImage(index: number) {
  const allImageData: ImageData[] = JSON.parse(localStorage.getItem('imageData') || '[]');
  const image = allImageData[index];

  if (!image) return;

  channel.postMessage({
    type: postMessageType,
    image: image.path,
  });
}
