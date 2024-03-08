const router = require("express").Router();
const passport = require("passport");

const clientURL = "http://localhost:5174/dashboard";

router.get("/google",
  passport.authenticate("google", { scope: ["profile"] })
);
router.get("/login/failed" , (req,res) =>{
  res.status(401).json({
    success: false,
    message: "Login failed!"
  })
});
router.get("/login/success", (req, res) => {
  if(req.user){
    res.status(200).json({
      success: false,
      message: "Login success!",
      user: req.user,
      //cookies : req.cookies
    });

  }
  
});

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login/failed", successRedirect: clientURL })
);

router.get("/logout",(req,res) =>{
  req.logOut();
  res.redirect("http://localhost:5174");
})

module.exports = router;