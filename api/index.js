const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const schedule = require("node-schedule");

const app = express();
app.use(cors());

app.use(express.static(__dirname + "/public"));

const pool = new Pool({
  user: "postgres.rcwueuhajueetwodahxv",
  host: "aws-0-ap-southeast-1.pooler.supabase.com",
  database: "postgres",
  password: "JxrLnug8rI6SyvkEUXSi",
  port: 6543,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("PostgreSQL Connected...");
  release();
});

// Function to update exhibition status
const updateExhibitionStatus = () => {
  const currentDate = new Date().toISOString().split("T")[0]; // Get current date in 'YYYY-MM-DD' format

  const updateCurrentExhibitions = `UPDATE exhibition SET status = 'current' WHERE start_date <= $1 AND end_date >= $1`;
  const updatePastExhibitions = `UPDATE exhibition SET status = 'past' WHERE end_date < $1`;

  pool.query(updateCurrentExhibitions, [currentDate], (err, result) => {
    if (err) throw err;
    console.log("Current exhibitions updated");
  });

  pool.query(updatePastExhibitions, [currentDate], (err, result) => {
    if (err) throw err;
    console.log("Past exhibitions updated");
  });
};

// Schedule the job to run every day at midnight
schedule.scheduleJob("0 0 * * *", () => {
  updateExhibitionStatus();
});

app.get("/exhibition", (req, res) => {
  const sql = "SELECT * FROM exhibition";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results.rows);
  });
});

app.get("/collection", (req, res) => {
  const sql = "SELECT * FROM collection";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results.rows);
  });
});

app.get("/artists", (req, res) => {
  const sql = "SELECT * FROM artists";
  pool.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results.rows);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
