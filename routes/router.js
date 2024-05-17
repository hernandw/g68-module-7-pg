import express from "express";
/* import pool from "../config/stringPool.js"; */
/* import db from "../config/configPool.js"; */
import pool from "../config/poolConect.js";
 
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get('/users', async (req, res) => {
    const consulta = await pool.query("SELECT * FROM users");
    console.log(consulta.rows);
    res.send(consulta.rows);
})


router.get("*", (req, res) => {
  res.status(404).send("Page Not found");
});

export default router;
