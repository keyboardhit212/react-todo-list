
export default class IndexedDB {

    constructor(dbName, objectStore) {
        this.dbName = dbName;
        this.objectStore = objectStore;
        const request = indexedDB.open(dbName);
        
        request.onupgradeneeded = (e) => {
            const db = e.target.result;
            let pants = db.createObjectStore(objectStore, {autoIncrement: true});
            pants.createIndex('date_idx', 'date');
        }

        request.onsuccess = (e) => {
            console.log('successfully created indexedDB');
        }

        request.onerror = (e) => {
            throw new Error("Error in Database");
        }
    }

    insert(data) {
        const request = indexedDB.open(this.dbName);

        request.onsuccess = (e) => {
            const db = e.target.result;
            let txn = db.transaction(this.objectStore, "readwrite");
            let store = txn.objectStore(this.objectStore);
            let query = store.add(data);

            query.onsuccess = (e) => {
                console.log("Successfully Inserted Data!");
            }

            query.onerror = (e) => {
                console.log("Error inserting data!");
            }
        }
    }

    get(date, getHook) {
        const request = indexedDB.open(this.dbName);

        request.onsuccess = (e) => {
            const db = e.target.result;
            let txn = db.transaction(this.objectStore, "readwrite");
            let store = txn.objectStore(this.objectStore);
            let name_idx = store.index('date_idx');

            let query = name_idx.getAll(date);

            query.onsuccess = (e)  => {
                getHook(query.result);
            }

            query.onerror = (e) => {
                console.log("Error inserting data!");
            }
        }
    }
}