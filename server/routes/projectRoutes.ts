import {  Router, RouterContext } from "oak";
import db from '../db.ts'
import projectController from '../controllers/projectController.ts'

const router = new Router();

router
  .get('/home/all', projectController.getproject)
  .post('/home', projectController.saveProject)
  .delete('/home', projectController.deleteProject)

  export default router