module.exports = (...roles) => {
    return (req, res, next) => {
        const role = req.user.data.role;
        if (!roles.includes(role)) {
            res.status(405).json({
                status: "error",
                message: "You don't have permission"
            });
        }

        return next();
    };
};