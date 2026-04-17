import { openDB } from 'idb';

const DB_NAME = 'myAppDB';
const DB_VERSION = 1;

export const dbPromise = openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains('images')) {
      const store = db.createObjectStore('images', {
        keyPath: 'id',
        autoIncrement: true,
      });

      store.createIndex('name', 'name');
    }
  },
});
