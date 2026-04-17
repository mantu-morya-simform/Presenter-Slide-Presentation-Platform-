import { createChannel } from './createChannel';

import type { ImageData } from '../models/type/imageDataType';
import { postMessageType } from '../constants/constantsType';
import { getAllImages } from '../db/store';

/**
 * Broadcasts the selected image to other tabs for real-time preview sync.
 * Fetches image from localStorage and sends it via BroadcastChannel.
 *
 */

const channel = createChannel();

export async function selectImage(index: number) {
  const allImageData: ImageData[] = await getAllImages();
  const image = allImageData[index];

  if (!image) return;

  channel.postMessage({
    type: postMessageType,
    image: image.path,
  });
}
