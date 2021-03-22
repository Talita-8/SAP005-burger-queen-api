// aqui vai o código que acessa o banco de dados
const data = require('./data.json')

const getAllExamples = (req, res) => { 
  res.send(data)
}

module.exports = { getAllExamples }