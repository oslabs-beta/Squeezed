import db from '../db.ts'
import Dex from "https://deno.land/x/dex/mod.ts";
const dex = Dex({client: 'postgres'}); 

const projectController: any = {};

// projectController.getproject = async(ctx: any) => {
//     try {
//         const id = await ctx.params.id;
//         const data = await db.queryObject({
//           text: `SELECT * FROM projects WHERE account_id = ${id}`
//         });
//         ctx.response.body = data.rows[0]
//         ctx.response.status = 200;
//         return;
//     } catch (err) {
//         ctx.response.body = { status: false, data: null};
//         ctx.response.status = 500;
//         console.log(err);         
//     }
// };

projectController.saveProject = async(ctx: any) => {
    try {
        //get request body and store in constants
        const { value } = await ctx.request.body({type: 'json'});
        const obj = await value;
        let { project_id, elementsArr } = obj;
        console.log(project_id);

        //if project doesn't exist in db
        if(!project_id)
            // console.log(await value);
            let insertQuery = dex("projects").insert(await value).toString(); 
            const newData = await db.queryObject(insertQuery);
            console.log("newData:", newData);
            // project_id = newData.rows[0];
        }
        // throw an error if query returns arr.length > 1 -> do later
        //project doesn't exist, add row to projects table and add its elements to table
        // if(!data.rows.length){
            //     let insertQuery = dex("projects").insert(await value).toString(); 
            //     const newData = await db.queryObject(insertQuery);
            //     // console.log(data);
            // }
        //project does exist
        //loop through elementsArr, updating existing elements and adding new elements if id doesn't already exist
        // elementsArr.forEach(async element => {
        //     const text = element.text
        //     const textAlign = element.textAlign 
        //     const textDecoration = element.textDecoration
        //     const backgroundColor = element.backgroundColor
        //     const color = element.color
        //     const margin = element.margin
        //     const height = element.height
        //     const padding = element.padding
        //     let selectQuery = dex("elements").insert(await text, textAlign, textDecoration, backgroundColor, color, margin, height, padding, project_id).toString();
        //     await db.queryObject(selectQuery);
        // })
        ctx.response.status = 200; 
        return; 
    } catch (err) {
        ctx.response.body = { status: false, data: null};
        ctx.response.status = 500;
        console.log(err);
    }
};

export default projectController;


// //create project in db
// const projectQuery = dex.select().from("projects").where({id: project_id}).toString();
// const data = await db.queryObject(projectQuery);
// console.log(data.rows);