const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const cors = require("cors")
const app = express();
const authRoute = require("./routes/auth");
require("dotenv").config();
const passportSetup = require("./passport")

//The dotenv package is commonly used to load environment variables 
//from a .env file into the process.env object.

const port = process.env.PORT || 3000;
const secretKey = process.env.SECRET_KEY;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(cookieSession({
  name: "session", // cookie name
  keys: [secretKey], // secret key to sign the cookie
  maxAge: 24* 60 *60 * 100 // 1 day
}));

app.use(passport.initialize());
app.use(passport.session()); // enable session support
app.use("/auth", authRoute);
app.use(
  cors({
    origin: "http://localhost:5174",
    methods: "GET,POST,DELETE,PUT",
    credentials: true, //allows the frontend to include cookies or other credentials when making requests to the backend.
  })
);

