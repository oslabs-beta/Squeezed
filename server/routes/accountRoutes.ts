import {  Router, RouterContext } from "oak";
import db from '../utils/db.ts';
import accountController from '../controllers/accountController.ts';
import { oakCors } from "https://deno.land/x/cors/mod.ts";

const router = new Router();

router
  .post("/account", oakCors(), accountController.createAccount)
  .post('/login', oakCors(), accountController.loginCheck)

export default router;