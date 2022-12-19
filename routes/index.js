const Router = require("express").Router;
const router = Router();

router.get("/", async (req, res) => {
    try {
        return [
            res.status(200).json({ message: "Api running on server" })
        ]

    } catch(e) {
        return [
            res.status(500).json({ message: "Api cannot running on server" })
        ]
    }
});

const userRoutes = require("./user.routes");
router.use("/auth", userRoutes);

module.exports = router;