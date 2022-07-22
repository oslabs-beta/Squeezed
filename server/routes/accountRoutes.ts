import {  Router, RouterContext } from "oak";
import db from '../db.ts'
import accountController from '../controllers/accountController.ts'

const router = new Router();

router
  .post("/account", accountController.createAccount)
  .get('/account/:id', accountController.getAccount)
  .get('/account', accountController.getAll);


export default router;