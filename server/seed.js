//here you can add your SQL queries to create your table
// import { db } from "./server";

import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const dbConnectionString = process.env.DATABASE_URL;

export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

db.query(`CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    location VARCHAR(50),
    favnumber INTEGER,
    feedback TEXT
);`);

const res = await db.query(`
INSERT INTO messages (name, location, favnumber, feedback)
VALUES ('Saad', 'LEICESTER', '6', 'Great')`);
console.log(res);

// INSERT INTO messages (name, location, occupation, start_date)
// VALUES ('Manny', 'Norwich', 'instructor', '2023-12-04'),
// ('Joe', 'Norwich', 'TA', '2024-01-05');

// SELECT * FROM feedbacks;
