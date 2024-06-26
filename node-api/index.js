const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const schedule = require("node-schedule");

const app = express();
app.use(cors());

app.use(express.static("public"));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moma_gallery",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Function to update exhibition status
const updateExhibitionStatus = () => {
  const currentDate = new Date().toISOString().split("T")[0]; // Get current date in 'YYYY-MM-DD' format

  const updateCurrentExhibitions = `UPDATE exhibition SET status = 'current' WHERE start_date <= ? AND end_date >= ?`;
  const updatePastExhibitions = `UPDATE exhibition SET status = 'past' WHERE end_date < ?`;

  db.query(
    updateCurrentExhibitions,
    [currentDate, currentDate],
    (err, result) => {
      if (err) throw err;
      console.log("Current exhibitions updated");
    }
  );

  db.query(updatePastExhibitions, [currentDate], (err, result) => {
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
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/artworks", (req, res) => {
  const sql = "SELECT * FROM artworks";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get("/artists", (req, res) => {
  const sql = "SELECT * FROM artists";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
