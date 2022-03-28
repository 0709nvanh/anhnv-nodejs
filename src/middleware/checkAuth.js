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
  console.log(req.auth);
  console.log(req.profile);
  const user = req.profile._id == req.auth._id;
  if(!user){
    return res.status(402).json({
      msg: "Ban khong duoc pheo truy cap"
    })
  }
  next()
}

export const isAdmin = (req, res, next) => {
  if(req.profile.role == 0){
    return res.status(401).json({
      msg: "Ban khong la admin, khong duoc thao tac"
    })
  }
  next()
}

