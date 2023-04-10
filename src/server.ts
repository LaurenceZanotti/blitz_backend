import express from 'express'
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'

import routes from './routes'

const PORT = 3000

const main = async () => {
    const app = express()
    const admin = new AdminJS({})
    const adminRouter = AdminJSExpress.buildRouter(admin)

    app.use(admin.options.rootPath, adminRouter)
    app.use(routes)
    
    app.listen(PORT, () => console.log(`Aplicativo rodando no http://localhost:${PORT}\nAdmin no http://localhost:${PORT}${admin.options.rootPath}`))
}

main()