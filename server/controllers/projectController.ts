import db from '../db.ts'
import Dex from "https://deno.land/x/dex/mod.ts";
const dex = Dex({client: 'postgres'}); 

const projectController: any = {};

projectController.getproject = async(ctx: any) => {
    try {
        const id = await ctx.params.id;
        const data = await db.queryObject({
          text: `SELECT * FROM projects WHERE account_id = ${id}`
        });
        ctx.response.body = data.rows[0]
        ctx.response.status = 200;
        return;
    } catch (err) {
        ctx.response.body = { status: false, data: null};
        ctx.response.status = 500;
        console.log(err);         
    }
};

projectController.saveProject = async(ctx: any) => {
    try {
        const { value } = await ctx.request.body({type: 'json'});
        let selectQuery = dex("projects").insert(await value).toString();
        const data = await db.queryObject(selectQuery);
        ctx.response.status = 200; 
        return; 
    } catch (err) {
        ctx.response.body = { status: false, data: null};
        ctx.response.status = 500;
        console.log(err);
    }
};

export default projectController;