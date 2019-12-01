const mongoose = require('mongoose')
const validator = require('validator')

//Limpie el Todo schema y lo converti en el de expense
const ExpenseSchema = new mongoose.Schema({
  //Toda la info que va en un expense, esto lo tome del Front
  Nature: {
    //Aqui se me ocurrio un Bool, para marcar si es true, es income, si es negativo es expense
    type: Boolean,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Date: {
    type: String,
    default: false
  },
  Amount: {
    type: Number,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
})

const Expense = mongoose.model('Expense', ExpenseSchema)

module.exports = Expense
