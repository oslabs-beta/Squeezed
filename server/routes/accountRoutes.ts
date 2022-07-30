import {  Router, RouterContext } from "oak";
import db from '../db.ts'
import accountController from '../controllers/accountController.ts'
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const router = new Router();

router
  .post("/account", oakCors(),accountController.createAccount)
  .post('/login', oakCors(), accountController.loginCheck)
  // .get('/account', accountController.getAll);
  // .post('/userInfo', accountController.getUserInfo);

export default router;