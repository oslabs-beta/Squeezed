import db from '../db.ts'
import Dex from "https://deno.land/x/dex/mod.ts";
const dex = Dex({client: 'postgres'});
const accountController: any = {};

// accountController.createAccount = async(ctx: any, next: any) => {
//     try{
//         const { username, email, password } = ctx.request.body
//         const text = 'INSERT INTO accounts (username, email, password) VALUES ($1, $2, $3)'
//         const values = [username,email,password];
//         const data: any = await db.queryArray(text, values)
//         ctx.response.body = {
//             status: true,
//             data: data.rows[0]
//         }
//         ctx.response.status = 200;
//         return await next();
//     }
//     catch (err) {
//         ctx.response.body = { status: false, data: null};
//         ctx.response.status = 500;
//         console.log(err);
//     }
// }

// accountController.getAccount = async({ request, response }: { request: any; response: any })  => {
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


  export default accountController;