const Router = require("express").Router;
const router = Router();

router.get("/", async (req, res) => {
    try {
        res.send('api running')
    } catch(error) {
        res.send('api not running')
    }
});

module.exports = router;