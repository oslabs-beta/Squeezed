import {  Router, RouterContext } from "oak";
import db from '../db.ts'
import accountController from '../controllers/accountController.ts'

const router = new Router();

router
  .post("/account", accountController.createAccount)
  .post('/login',  accountController.loginCheck)
  .get('/account', accountController.getAll);
  // .post('/userInfo', accountController.getUserInfo);


export default router;