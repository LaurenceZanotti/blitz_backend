import express from 'express'
import routes from './routes'

const port = 53999

const app = express()

app.use(routes)

// app.get('/', (req, res) => res.send("Salve menó"))

// app.get('/todos/', (req, res) => {
//     res.send("Listagem de ToDo")
// })

// app.post('/todos/', (req, res) => {
//     res.send("Criação de um ToDo")
// })

// app.get('/todos/:id', (req, res, id) => {
//     res.send(`Detalhamento do ${req.params.id}`)
// })

// app.put('/todos/:id', (req, res, id) => {
//     res.send(`Atualizar o ${req.params.id}`)
// })

// app.delete('/todos/:id', (req, res, id) => {
//     res.send(`Deletar o ${req.params.id}`)
// })

app.listen(port, () => console.log(`Aplicativo rodando no http://localhost:${port}`))