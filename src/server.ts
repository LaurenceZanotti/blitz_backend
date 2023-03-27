import express from 'express'
import routes from './routes'

const port = 53999

const app = express()

app.use(routes)

app.listen(port, () => console.log(`Aplicativo rodando no http://localhost:${port}`))