//access express cors pg dotenv
import express from "express"
import cors from "cors"
import pg from "pg"
import dotenv from "dotenv"

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

//setup a apart for my app to listen
const PORT = 8080
app.listen(PORT, () => {
    console.log(`My server is running on PORT: ${PORT}`);
});

//i need to set up root route
app.get("/", (req, res) => {
    res.json({message: "looking at root route"});
})

app.post("/feedbacks", (req, res) => {
    const bodyData = request.body;
    console.log(bodyData);

    res.json({
        message: "feedback received",
        location: `${bodyData.location}`,
    });
});

//need 2 routes minimum
//route to read database
//route to create or add data to database
//for CREATE route, need to use request.body is an object that represents the form data coming from your client
//need to SQL queries and parameters in these routes

//In the .env file, you need your database connection string with the correct PASSWORD