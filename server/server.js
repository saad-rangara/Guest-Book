//access express cors pg dotenv
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

//initialize express
const app = express();

//config dotenv
dotenv.config();

//tell express app to use json
//tell express app to use cors
app.use(express.json());
app.use(cors());

//setup database pool using the connection
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

//i need to set up root route
app.get("/", (req, res) => {
  res.json({ message: "looking at root route" });
});

app.get("/feedbacks", async (req, res) => {
  // read from database and return array of feedbacks
  const query = await db.query("SELECT * from messages ORDER BY id DESC");
  return res.json(query.rows);
});

app.post("/feedback", async (req, res) => {
  // save to database feedback sent from client
  const bodyData = await req.body;

  const feedbackData = bodyData.feedbackData;
  // console.log("feedbackData", feedbackData);

  const result = await db.query(`
    INSERT INTO messages (name, location, favnumber, feedback)
    VALUES ('${feedbackData.name}', '${feedbackData.address}', ${feedbackData.number}, '${feedbackData.feedback}')`);
  console.log("databse insert result", result);

  if (result.rowCount === 1) {
    res.json({
      message: "feedback received",
    });
  } else {
    res.json({
      message: "Error saving feedback, please try again",
    });
  }
});

//setup a apart for my app to listen
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`My server is running on PORT: ${PORT}`);
});

//need 2 routes minimum
//route to read database
//route to create or add data to database
//for CREATE route, need to use request.body is an object that represents the form data coming from your client
//need to SQL queries and parameters in these routes

//In the .env file, you need your database connection string with the correct PASSWORD
