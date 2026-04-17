import { getAllImages } from '../db/store';

const channel = new BroadcastChannel('preview_sync');

/**
 * Broadcasts the selected image to other tabs for real-time preview sync.
 * Fetches image from localStorage and sends it via BroadcastChannel.
 */
export async function selectImage(index: number) {
  const allImageData: ImageData[] = await getAllImages();
  const image = allImageData[index];

  if (!image) return;

  channel.postMessage({
    type: 'UPDATE_IMAGE',
    image: image.path,
  });
}
