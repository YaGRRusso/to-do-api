import { Router } from "express";

import * as ApiController from '../controllers/apiController'

const router = Router()

// router.get('/', ApiController.getTasks)
// router.post('/new', ApiController.createTask)
// router.put('/update/:id', ApiController.updateTask)
// router.delete('/delete/:id', ApiController.deleteTask)
router.get('/', (req, res) => {
   res.json({ working: true })
})

export default router