import { createPool } from "mysql2/promise";

//usamos pool para no tener que abrir y cerrar la conexión cada vez que queremos hacer una consulta
export const pool = createPool({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "svrk73",
  database: "mern-task-db",
});
