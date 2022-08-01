import {  Router, RouterContext } from "oak";
import db from '../utils/db.ts';
import projectController from '../controllers/projectController.ts';
import {authorize} from '../controllers/authorize.ts';

const router = new Router();

router
  .post('/home/get', authorize, projectController.getproject)
  .post('/home/load', authorize, projectController.loadProject)
  .post('/home/save', authorize, projectController.saveProject)
  .post('/home/delete', authorize, projectController.deleteProject)

export default router;