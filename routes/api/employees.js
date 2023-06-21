const express = require('express');
const router = express.Router();

const employeesController = require('../../Controllers/employeesController')

router.route('/')
    .post(employeesController.handleNewEmployee)

module.exports = router