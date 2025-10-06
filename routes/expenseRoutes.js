const express = require('express')
const router = express.Router()
const expenseControler = require('../controller/expenseController')

router.post('/', expenseControler.addExpense)
router.get('/', expenseControler.getExpense)
router.delete('/:id', expenseControler.deleteExpense)
router.put('/:id', expenseControler.updateExpense)


module.exports = router
