const jwt = require("jsonwebtoken")
module.exports.verifyToken = (req, res, next) => {
    const { token } = req.body

    if (!token) 
        return [
            res.status(401).json({
                code: 401,
                status: false,
                message: "Unauthorization Request!"
            })
        ]
    try {
        const decoded = jwt.verify(token, "THISISEXAMPLE")
        req.user_id = decoded._id
        next()
    } catch (e) {
        return [
            res.status(500).json({
                code: 500,
                status: false,
                message: e.message
            })
        ]
    }
}