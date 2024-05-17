import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    connectionString: 'postgresql://postgres:123456@localhost:5432/empresaDB'
})

export default pool