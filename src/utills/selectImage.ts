import type { ImageData } from '../models/type/imageDataType';
import { postMessageType } from '../constants/constantsType';

const channel = new BroadcastChannel('preview_sync');

/**
 * Broadcasts the selected image to other tabs for real-time preview sync.
 * Fetches image from localStorage and sends it via BroadcastChannel.
 */
export function selectImage(index: number) {
  const allImageData: ImageData[] = JSON.parse(localStorage.getItem('imageData') || '[]');
  const image = allImageData[index];

  if (!image) return;

  channel.postMessage({
    type: postMessageType,
    image: image.path,
  });
}
