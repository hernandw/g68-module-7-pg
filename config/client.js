import pg from "pg";
const { Client } = pg;

/* const connection = async () => {
  const client = new Client({
    host: "localhost",
    database: "empresaDB",
    user: "postgres",
    password: "123456",
  });

  await client.connect();
  const pepe = await client.query("SELECT * FROM users");
  console.log(pepe.rows);
 await client.end();
}; */


const client = new Client({
  host: "localhost",
  database: "empresaDB",
  user: "postgres",
  password: "123456",
});


export default client;
