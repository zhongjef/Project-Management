const bcrypt = require("bcrypt");

const saltRounds = 10;

const encrypt = (password) => {
    return bcrypt.hashSync(password, saltRounds);
}

const authenticate = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}

module.exports = {authenticate: authenticate, encrypt: encrypt};