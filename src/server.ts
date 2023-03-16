import express from 'express'

const app = express()

app.get('/', (req, res) => res.send("Salve menó"))

app.listen(3000, () => console.log("Aplicativo rodando no 3000 kkkk"))