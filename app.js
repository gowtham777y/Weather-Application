import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import 'dotenv/config'

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
const port = 3000;
const apiKey = process.env.API_KEY;
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q="

app.post("/submit", async (req,res) => {
    const city = req.body.city;
    console.log(city);
    try {
        const result = await axios.get(API_URL + city+"&units=metric&appid="+apiKey);
        const temperature = `${result.data.main.temp} degree Celcius`;
        const content = `Temperature in ${city} is ${temperature}`;
        res.render("weather.ejs", {content: content});
    } catch (error) {
        console.log(error);
    }
})

app.get("/", (req,res) => {
    res.render("weather.ejs", {content: "Please Enter City Name"});
})

app.listen(port, () => {
    console.log(`Server started to listen on port ${port}`);
})