const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Route to render the form
app.get("/", (req, res) => {
  res.render("index");
});

// Route to handle form submission
app.post("/", async (req, res) => {
  const page = req.body.page_number; // Get the page number from the form
  const url = `https://reqres.in/api/users?page=${page}`;

  try {
    // Fetch data from the ReqRes API
    const response = await axios.get(url);
    const users = response.data.data;

    // Render the results in the template
    res.render("result", { users });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching data from API.");
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});