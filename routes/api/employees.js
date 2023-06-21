const express = require('Express');
const router = express.Router();

const employeesController = require('../../Controllers/employeesController')

router.route('/')
    .post(employeesController.handleNewEmployee)

module.exports = router