const validateHelper = require('../helpers/validate');

const validateContact = (req, res, next) => {
    const contactRules = {
        firstName: 'required|string',
        lastName: 'required|string',
        email: 'required|email',
        favoriteColor: 'string',
        birthday: 'date'
    };

    validateHelper(req.body, contactRules, {}, (err, status) => {
        if (!status) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: err.errors
            });
        }
        next();
    });
};

module.exports = validateContact;