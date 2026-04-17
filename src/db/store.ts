import type { ImageData } from '../models/type/imageDataType';
import { dbPromise } from './db';

// Add image
export async function addImage(image: ImageData): Promise<IDBValidKey> {
  const db = await dbPromise;
  return db.add('images', image);
}

// Get All images
export async function getAllImages(): Promise<ImageData[]> {
  const db = await dbPromise;
  return db.getAll('images');
}

// Get All image
export async function getSingleImage(id: number): Promise<ImageData> {
  const db = await dbPromise;
  return db.get('images', id);
}

// Delete image
export async function deleteImage(id: number): Promise<void> {
  const db = await dbPromise;
  return db.delete('images', id);
}

// Update image
export async function updateImage(image: ImageData): Promise<IDBValidKey> {
  const db = await dbPromise;
  return db.put('images', image);
}
