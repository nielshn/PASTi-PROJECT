const apiAdapter = require('../../apiAdapter');
const {
    URL_SERVICE_COURSE
} = process.env;

const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res) => {
    try {
        const course = await api.post('/api/courses/', req.body);
        return res.json(course.data);
    } catch (error) {
        if (error.code === "ECONNREFUSED") {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }

        if (error.response) {
            const { status, data } = error.response;
            return res.status(status).json(data);
        } else {
            // Handle unexpected errors
            console.error('Unexpected error:', error);
            return res.status(500).json({ status: 'error', message: 'internal server error' });
        }
    }
};
