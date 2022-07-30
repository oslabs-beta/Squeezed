import {  Router, RouterContext } from "oak";
import db from '../db.ts'
import projectController from '../controllers/projectController.ts'
import {authorize} from '../controllers/authorize.ts';

const router = new Router();

router
  .post('/home', authorize, projectController.saveProject)
  .delete('/home', authorize, projectController.deleteProject)

  export default router