import indexController from "./controllers/indexController"
import {
    deleteTodoController,
    getTodoController,
    getTodosController,
    postTodosController,
    putTodoController
} from "./controllers/todo/todoController"

const express = require("express")
const router = express.Router()

router.get('/', indexController)

router.route('/todos/')
    .get(getTodosController)
    .post(postTodosController)

router.route('/todos/:id')
    .get(getTodoController)
    .put(putTodoController)
    .delete(deleteTodoController)

export default router