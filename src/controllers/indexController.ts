import express from 'express'

export default function indexController(req: express.Request, res: express.Response) {
    res.send("Salve menó")
}