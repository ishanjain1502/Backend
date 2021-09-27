const { validEmail,
    passwordValidations } = require('../utilities/validations');

/*
* @params{*} req
* @params{*} res
* @params{*} next

email validation = {. , @};
password validation
comfirm password validation

*/

const registerInitialCheck = (req, res, next) => {
    const { email, password, comfirmPassword } = req.body;

    if (
        typeof email === 'string' &&
        typeof password === 'string' &&
        typeof comfirmPassword === 'string' &&
        email.length > 0 &&
        password.length > 8 &&
        comfirmPassword === password &&
        validEmail(email) &&
        passwordValidations(password)) {
        next();
    }
    else {
        res.status(401).send('initial checks failed');
    }
}

module.exports = registerInitialCheck;