import { openDB } from 'idb';

export const dbPromise = openDB('image-db', 1, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('images')) {
      db.createObjectStore('images', {
        keyPath: 'id',
        autoIncrement: true,
      });
    }
  },
});
