import express from 'express'

export function getTodosController(req: express.Request, res: express.Response) {
    res.send("Listagem de ToDos")
}
export function postTodosController(req: express.Request, res: express.Response) {
    res.send("Criação de um ToDo")
}

export function getTodoController(req: express.Request, res: express.Response) {
    res.send(`Detalhamento do ${req.params.id}`)
}

export function putTodoController(req: express.Request, res: express.Response) {
    res.send(`Atualização do ${req.params.id}`)
}

export function deleteTodoController(req: express.Request, res: express.Response) {
    res.send(`Deleção do ${req.params.id}`)
}