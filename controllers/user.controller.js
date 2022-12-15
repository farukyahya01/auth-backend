
module.exports = {
    login: async (req, res) => {
        try {
            var data = req.body;
        } catch (e) {
            return responseStructure(res, 500, false, e, {});
        }
    },
}