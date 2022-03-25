import expressJWT from 'express-jwt'

exports.checkAuth = (req, res, next) => {
  const isAdmin = true;
  if (isAdmin) {
    next();
  } else {
    res.redirect("/");
  }
};

export const requiredSignin = expressJWT({
  secret: "aaaa",
  algorithms: ["HS256"],
  requestProperty: "auth"
})

export const isAuth = (req, res, next) => {
  console.log(req.auth)
}

