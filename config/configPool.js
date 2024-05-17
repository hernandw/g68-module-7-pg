import pg from "pg";
const { Pool } = pg;

const config = {
    user: "postgres",
    host: "localhost",
    database: "empresaDB",
    password: "123456",
    allowExitOnIdle: true,

}

const db = new Pool(config);

export default db