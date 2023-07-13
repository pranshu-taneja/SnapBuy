const express = require('express')
const app = express()

export function dummy(req, res, next) {
    const data = req.body.data;
    if (data.num > 10) {
        next();
    }
    else {
        req.status(400).send("Forbidden");
    }
}

// export default dummy;