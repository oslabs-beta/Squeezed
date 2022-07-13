import {  Router, RouterContext } from "oak";
import db from '../db.ts'
import projectController from '../controllers/projectController.ts'

const router = new Router();

router
  .get('/home', projectController.getproject)
  .post('/home', projectController.saveProject)
  .get('test', async ({ request, response, params }: { request: any, response: any, params: any }) = > {
    
  })


  export default router