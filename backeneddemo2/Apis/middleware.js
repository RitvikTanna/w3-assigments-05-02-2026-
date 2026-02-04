import jwt from "jsonwebtoken"
export function verifyTOKEn(req, res, next) {
    //TOKEN verification logic

    //get token from req (using cookies)
    let signedToken = req.cookies.token
    if (!signedToken) {
        return res.status(401).json({ message: "please login first" })


}
//verify token
let decodedToken=jwt.verify(signedToken,"abcdef")
console.log(decodedToken)
//if token is valid allow user to access the protected route
next()


}