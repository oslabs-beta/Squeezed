import db from '../utils/db.ts';
import Dex from "https://deno.land/x/dex/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
import { key } from "../../server/utils/apiKey.ts";
import { create } from "https://deno.land/x/djwt@v2.7/mod.ts";
const dex = Dex({client: 'postgres'});
const salt = await bcrypt.genSalt(10);

const accountController: any = {};

//Creates a new account with username,password,email inputs and stores them in the database. 
accountController.createAccount = async(ctx:any) => {
    try{
        const {username, password, email} = await ctx.request.body().value;
        const newPass = await bcrypt.hash(password,salt);
        const user = dex("users").insert({username: username, password: newPass, email: email}).returning(['id','username', 'password','email']).toString();
        const data = await db.queryObject(user);
        ctx.response.body = data.rows[0];
        ctx.response.status = 200;
        return;
    }
    catch (err) {
        ctx.response.body = { status: false, data: null};
        ctx.response.status = 500;
        console.log(err);
    }
}

// Confirms that input password matches with the bcrypt password in database
accountController.loginCheck = async(ctx: any, next: any) => {    
 try{
    const {username, password} = await ctx.request.body().value;
    const user = dex.select().from("users").where({ username: username }).toString();
    const data = await db.queryObject(user);
    const confirmPassword = await bcrypt.compare(password, data.rows[0].password);
    if(!user || !confirmPassword){
        ctx.response.body = 404;
        ctx.response.body = {message: "Invalid login credentials"};
        return;
    } 
    //authenticate a user
    const payload = {
        id: user.id,
        username: username
    };
    const jwt =  await create({ alg: "HS512", typ: "JWT" }, { payload }, key);
    
    // sends userId, jwt, and true/false in response body
    if(jwt) {
        ctx.response.status = 200;
        ctx.response.headers.set("Content-Type", "application/json");
        ctx.response.body = JSON.stringify({
            userId: data.rows[0].id,
            token: jwt,
            result: confirmPassword
        })
     } else {
        ctx.response.status = 500;
        ctx.response.body = {
            message: "internal server error"
        }
     }
      return;    
    }    
    catch (err) {
        ctx.response.body = { status: false, data: null};
        ctx.response.status = 500;
        return err;
    }

}

  export default accountController;