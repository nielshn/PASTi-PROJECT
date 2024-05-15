const Axios = require("axios")
const { TIMEOUT } = process.env;

module.exports = (baseUrl) => {
    return Axios.create({
        baseURL: baseUrl,
        timeout: parseInt(TIMEOUT)
    })
}