// const express = require("express");
// const http = require("http");
// const ejs = require("ejs");
// const path = require("path");
// app = express();
// app.use(express.json());
// app.use(express.static("../public"));
// const templatepath = path.join(__dirname, "../public");
// app.set("view engine", "ejs");
// app.set("views", templatepath);

// // app.get("/", async (req, res) => {
// //   res.render("index");
// // });

// app.get("/", async (req, res) => {
//   try {
//     res.render("index");
//   } catch (error) {
//     console.error("Error rendering index:", error);
//     res.status(500).send("Error rendering page");
//   }
// });

// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//   try {
//     console.log(`Server running on port ${port}`);
//   } catch (error) {
//     console.log("error");
//   }
// });

const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, "../build")));

// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
