const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;

// ASSETS SETUPs
app.use(express.static("public"));
//ROUTES SETUPs
app.get("/", (req, res) => {
	res.render("home");
});
//TEMPLATE ENGINE SETUPSs
const ejs = require("ejs");
const expressLayout = require("express-ejs-layouts");
app.use(expressLayout);
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
	console.log(`Server is running @ ${PORT}`);
});
