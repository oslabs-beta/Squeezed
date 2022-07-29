import db from '../db.ts'
import Dex from "https://deno.land/x/dex/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
const dex = Dex({client: 'postgres'});
const salt = await bcrypt.genSalt(10)

const accountController: any = {};

accountController.createAccount = async(ctx: any) => {
    try{
        const { value } = await ctx.request.body({type: 'json'});
        const obj = await value;
        const { username, password, email } = obj;
        const newPass = await bcrypt.hash(password,salt);
        const user = dex("users").insert({username: username, password: newPass, email: email}).toString();
        const data = await db.queryObject(user)
        ctx.response.status = 200;
        return;
    }
    catch (err) {
        ctx.response.body = { status: false, data: null};
        ctx.response.status = 500;
        console.log(err);
    }
}

accountController.loginCheck = async(ctx: any) => {    
 try{
        const { value } = await ctx.request.body({type: 'json'});
        const obj = await value;
        const { username, password } = obj;
        // console.log("backend account controller':", username, password);
        const user = dex.select().from("users").where({ username: username }).toString();
        const data = await db.queryObject(user);
        console.log('PASSWORD', data.rows[0].password)
        const result = await bcrypt.compare(password, data.rows[0].password)
        if(result){
            console.log(password, data.rows[0].password);
            ctx.response.body = result;
            // console.log('ctx.response.body', ctx.response.body)
            return;
        }
        else{ 
            console.log('Wrong Username and Password')
        }
    }
    catch (err) {
        ctx.response.body = { status: false, data: null};
        ctx.response.status = 500;
        console.log(err);
    }
}

accountController.getAll = async(ctx: any) => {    
    try{
           let selectQuery = dex.select().from("users").toString();
           const data = await db.queryObject(selectQuery)
           ctx.response.body = data.rows
           ctx.response.status = 200;
           return;
       }
       catch (err) {
           ctx.response.body = { status: false, data: null};
           ctx.response.status = 500;
           console.log(err);
       }
   }



  export default accountController;