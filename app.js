const express = require('express')
const cors = require('cors')
const path = require('path')
const sequelize = require('./utils/db-connection')
const Expense = require('./models/expense')
const expenseRoutes = require('./routes/expenseRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/expense', expenseRoutes)

sequelize.sync({ force: true }).then(() => {
    app.listen(3000, () => {
        console.log('Server is running')
    })
})
