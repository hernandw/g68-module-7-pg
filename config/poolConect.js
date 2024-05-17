import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    host: "localhost",
    database: "empresaDB",
    user: "postgres",
    password: "123456",
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
})

export default pool