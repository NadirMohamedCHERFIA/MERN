const express = require('Express');
const router = express.Router();

const registerController = require('../../Controllers/registerController')

router.route('/')
    .post(registerController.handleNewUser)

module.exports = router