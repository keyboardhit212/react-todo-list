// import { sqlite3 } from "sqlite3";

// export default class DatabaseHelper {

//     constructor() {
//         this.db = new sqlite3.Database('../../../todo.db', sqlite3.OPEN_READWRITE, (err) => {
//             if (err && err.code === "SQLITE_CANTOPEN") {
//                 throw new Error("Can't Open Database" + err);
//             }
//         });
//     }

//     insert(date, note) {
//         this.db.exec(
//             `INSERT INTO note (date, content) VALUES (${date.toString()}, ${note})`
//         );
//     }

//     select(date) {
//         const rows = []
//         this.db.each(`SELECT * FROM note WHERE date = ${date.toString()}`, (error, row) => {
//             if (error) {
//                 throw new Error("Invalid Select");
//             }
//             rows.push(row);
//         });
//     }
// }