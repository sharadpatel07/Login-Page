const jwt = require("jsonwebtoken");
const cors = require("cors")

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, process.env.TOKEN_KEY)
        req.user = data.user;
        next();
    } catch (error) {
        console.error(error.message)
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
}

module.exports = fetchuser;