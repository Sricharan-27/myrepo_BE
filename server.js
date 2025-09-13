const express = require("express");
const pool = require("./db/dbconnec.js");  // Note the dot-slash

const app = express();
app.use(express.json());

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ time: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send("DB connection failed");
  }
});

app.listen(5000, () => console.log("🚀 Server running on 5000"));
