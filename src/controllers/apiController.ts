import { Request, Response } from "express";
import { Todo } from "../models/Todo";

export const getTasks = async (req: Request, res: Response) => {
    let tasks = await Todo.findAll()

    res.status(200).json({ tasks })
}

// export const createTask = async (req: Request, res: Response) => {
//     let title = req.body.title

//     let newTask = Todo.build({
//         title: title
//     })
//     await newTask.save()

//     res.status(201).json({ newTask })
// }

// export const updateTask = async (req: Request, res: Response) => {
//     let id = req.params.id

//     let updatedTask = await Todo.findByPk(id)

//     if (updatedTask) {
//         updatedTask.done === 0 ? updatedTask.done = 1 : updatedTask.done = 0
//         updatedTask.save()

//         res.status(200).json({ updatedTask })
//     } else {
//         res.status(404).json({ error: 404 })
//     }
// }

// export const deleteTask = async (req: Request, res: Response) => {
//     let id = req.params.id

//     await Todo.destroy({
//         where: { id }
//     })

//     res.status(200).json({})
// }