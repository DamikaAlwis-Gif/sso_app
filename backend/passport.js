const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const CALLBACK_URL = process.env.CALLBACK_URL;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL:CALLBACK_URL ,
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile)
    }
  )
);

passport.serializeUser((user,done) => {
  done(null, user)
})

passport.deserializeUser((user,done) =>{
  done(null,user)
})