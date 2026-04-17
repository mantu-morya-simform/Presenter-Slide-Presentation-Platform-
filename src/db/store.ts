import { dbPromise } from './db';
import type { ImageData } from '../models/type/imageDataType';

// ➕ Add Image
export async function addImage(image: ImageData) {
  const db = await dbPromise;
  await db.add('images', image);
}

// 📥 Get All Images (sorted by order)
export async function getAllImages(): Promise<ImageData[]> {
  const db = await dbPromise;
  const images = await db.getAll('images');

  return images.sort((a, b) => a.order - b.order);
}

export async function swapImageOrder(index1: number, index2: number) {
  const db = await dbPromise;
  const images = await getAllImages(); // sorted

  // swap in array
  [images[index1], images[index2]] = [images[index2], images[index1]];

  // 🔥 normalize order (THIS FIXES EVERYTHING)
  for (let i = 0; i < images.length; i++) {
    images[i].order = i;
    await db.put('images', images[i]);
  }
}
