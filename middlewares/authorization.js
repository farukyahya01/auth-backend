const jwt = require("jsonwebtoken")
module.exports.verifyToken = (req, res, next) => {
    // const { token } = req.body

    if (!token) 
        return [
            res.status(401).json({ message: "Unauthorization Request!" })
        ]
    try {
        const decoded = jwt.verify(token, "THISISEXAMPLE")
        req.user_id = decoded._id

        next()
    } catch (e) {
        return [
            res.status(500).json({ message: e.message })
        ]
    }
}