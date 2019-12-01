const express = require('express')
const router = express.Router()

const users = require('./controllers/users.js')
//const todos = require('./controllers/todos.js')
const expenses = require('./controllers/expenses.js')
const auth = require('./middleware/auth')
//Esto no lo toco
router.get('/users', auth, users.getUser)
router.post('/login', users.login)
router.post('/logout', auth, users.logout)
router.post('/users', users.createUser)  // signup
router.patch('/users', auth, users.updateUser)
router.delete('/users', auth, users.deleteUser)
//Esto si
/*
router.get('/todos/:id', auth, todos.getTodo)
router.get('/todos', auth, todos.getTodos)
router.post('/todos', auth, todos.createTodo)
router.patch('/todos/:id', auth, todos.updateTodo)
router.delete('/todos/:id', auth, todos.deleteTodo)
*/

router.get('/expenses/:id', auth, expenses.getExpense)
router.get('/expenses', auth, expenses.getExpenses)
router.post('/expenses', auth, expenses.createExpense)
//router.patch('/todos/:id', auth, todos.updateTodo)
//router.delete('/todos/:id', auth, todos.deleteTodo)

router.get('*', function(req, res) {
  res.send({
    error: 'Bienvenido al Backend de Money Saver',
    Piggy: '(´・(oo)・｀) oink oink'
  })
})

module.exports = router

