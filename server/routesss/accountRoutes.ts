import {  Router, RouterContext } from "oak";
import db from '../db.ts'
import accountController from '../controllers/accountController.ts'

const router = new Router();

router
  .get('/', (context) =>{
      const output = context.request.body
      
      context.response.body = output;
      })
//   .post("/account", accountController.createAccount)
  .get('/account/:id', accountController.getAccount);


export default router