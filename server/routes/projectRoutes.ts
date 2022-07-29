import {  Router, RouterContext } from "oak";
import db from '../db.ts'
import projectController from '../controllers/projectController.ts'

const router = new Router();

router
.post('/home/get', projectController.getproject)
.post('/home/load', projectController.loadProject)
.post('/home/save', projectController.saveProject)
.delete('/home', projectController.deleteProject)

  export default router