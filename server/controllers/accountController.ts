import db from '../db.ts'
import Dex from "https://deno.land/x/dex/mod.ts";
const dex = Dex({client: 'postgres'});

const accountController: any = {};

accountController.createAccount = async(ctx: any) => {
    try{
        const { value } = await ctx.request.body({type: 'json'});
        let selectQuery = dex("accounts").insert(await value).toString();
        const data = await db.queryObject(selectQuery)
        ctx.response.body = data.rows[0]
        ctx.response.status = 200;
        return;
    }
    catch (err) {
        ctx.response.body = { status: false, data: null};
        ctx.response.status = 500;
        console.log(err);
    }
}

accountController.getAccount = async(ctx: any) => {    
 try{
        let selectQuery = dex.select().from("accounts").where({ id: ctx.params.id }).toString();
        const data = await db.queryObject(selectQuery)
        ctx.response.body = data.rows[0]
        ctx.response.status = 200;
        return;
    }
    catch (err) {
        ctx.response.body = { status: false, data: null};
        ctx.response.status = 500;
        console.log(err);
    }
}

accountController.getAll = async(ctx: any) => {    
    try{
           let selectQuery = dex.select().from("accounts").toString();
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