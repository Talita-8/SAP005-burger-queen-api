// aqui vai o código que acessa o banco de dados

const getAllExamples = (req, res) => {
  console.log("Bora testar")
  res.send("Request feita")
}

module.exports = { getAllExamples } 