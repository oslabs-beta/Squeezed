import {  Router, RouterContext } from "oak";
import db from '../db.ts'
import projectController from '../controllers/projectController.ts'

const router = new Router();

router
  .get('/home/:id', projectController.getproject)
  .post('/home', projectController.saveProject)


  export default router