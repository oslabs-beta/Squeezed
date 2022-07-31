import {  Router, RouterContext } from "oak";
import db from '../db.ts'
import projectController from '../controllers/projectController.ts'
import {authorize} from '../controllers/authorize.ts';

const router = new Router();

router
<<<<<<< HEAD
  .post('/home', authorize, projectController.saveProject)
  .delete('/home', authorize, projectController.deleteProject)
=======
  .post('/home/get', projectController.getproject)
  .post('/home/load', projectController.loadProject)
  .post('/home/save', projectController.saveProject)
  .post('/home/delete', projectController.deleteProject)
>>>>>>> dev

  export default router