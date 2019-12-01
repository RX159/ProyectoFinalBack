const mongoose = require('mongoose')
const validator = require('validator')

const ExpenseSchema = new mongoose.Schema({
  Type: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Date: {
    type: Boolean,
    default: false
  },
  Amount: {
    type: Double,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const Todo = mongoose.model('Todo', ExpenseSchema)

module.exports = Todo
