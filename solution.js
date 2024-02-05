import express, { request } from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3001;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  //try {
   // const response = await axios.get("https://api.forexrateapi.com/v1/latest?api_key=1100c4ebeda0f5f3f51751b6ab7a4ed7");
   // const result = response.data;
   // console.log(result);
    res.render("solution.ejs");

   // console.log("/ After render")
  //} catch (error) {
   // console.error("Failed to make request:", error.message);
   // res.render("solution.ejs", {
    //  error: error.message,
   // });
 // }
});

app.post("/submit", async (req, res) => {
  console.log("fgjdjdryj")
  try {
    console.log(req.body);
    console.log("sUBMIT EXECUTED")
    const type = req.body.base;
    const participants = req.body.currencies;
    
    console.log(type)
    const response = await axios.get(
      `https://api.forexrateapi.com/v1/latest?api_key=1100c4ebeda0f5f3f51751b6ab7a4ed7&base=${type}&currencies=${participants}`
    );
    
    const result = response.data;
    console.log(participants)
    console.log(result)
   
    res.render("solution.ejs", { data: result });
   
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("solution.ejs", {
      error: "No activities that match your criteria.",
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
