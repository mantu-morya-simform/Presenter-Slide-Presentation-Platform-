export interface ImageData {
  id?: number; // required for IndexedDB
  path: string;
  name: string;
  order: number; // for maintaining order
}
