import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
const port = 3000;

app.get("/", (req,res) => {
    res.render("weather.ejs");
})

app.listen(port, () => {
    console.log(`Server started to listen on port ${port}`);
})