import express from 'express'
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import dotenv from 'dotenv'
import routes from './routes'

dotenv.config()

const PORT = process.env.APP_PORT || 3000

const main = async () => {
    const app = express()
    const admin = new AdminJS({})
    const adminRouter = AdminJSExpress.buildRouter(admin)

    app.use(admin.options.rootPath, adminRouter)
    app.use(routes)
    
    app.listen(PORT, () => console.log(`Aplicativo rodando no http://localhost:${PORT}\nAdmin no http://localhost:${PORT}${admin.options.rootPath}`))
}

main()