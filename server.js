import express from "express";
import router from "./routes/movies.route.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb://localhost:27017/movies", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected to MongoDB");
})

app.post("/", (req, res) => {
    console.log("Welcome to the movies management app");
} );
 app.use("/movies", router);

app.listen(3000, () => { 
    console.log("Server is running on port 3000");
});

