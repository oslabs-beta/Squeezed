// import db from '../db.ts'
// import Dex from "https://deno.land/x/dex/mod.ts";
// const dex = Dex({client: 'postgres'}); 

// const projectController: any = {};

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

// projectController.saveProject = async(ctx: any) => {
//     try {
//         const { value } = await ctx.request.body({type: 'json'});
//         // console.log(ctx.request.body, value);
//         let selectQuery = dex("projects").insert(await value).toString();
//         const data = await db.queryObject(selectQuery);
//         ctx.response.status = 200; 
//         return; 
//     } catch (err) {
//         ctx.response.body = { status: false, data: null};
//         ctx.response.status = 500;
//         console.log(err);
//     }
// };

// export default projectController;

//deno-create-react-app run & deno run --allow-env --allow-read --allow-net server/server.ts
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

projectController.saveProject = async (ctx: any) => {
    try {
        //get request body and store in constants
        const { value } = await ctx.request.body({type: 'json'});
        const obj = await value;
        let { project_id, elementsArr } = obj;

        //if project doesn't exist in db, create a new row in projects table
        if(!project_id){
            let insertQuery = dex("projects").insert({}).returning('id').toString(); 
            const newData = await db.queryObject(insertQuery);
            project_id = newData.rows[0].id;
        }
        console.log("project id:", project_id, "elementsArr: ", elementsArr);

        //project exists, loop through elementsArr
        elementsArr.forEach(async el => {
            //if element already exists, update elements table
            const elementQuery = 
              dex
                .select()
                .from("elements")
                .where({project_id: project_id, id: el.id})
                .returning('id', 'element').toString();
            const elementData = await db.queryObject(elementQuery);
            // console.log(`element query output for id ${el.id}: `, elementData.rows);
            
            const { id, element, text, textAlign, textDecoration, backgroundColor, color, margin, height, padding } = el;
            console.log(id, element, text, textAlign, textDecoration)
            if(elementData.rows.length > 0){
              const updateQuery = 
                dex
                  .from("elements")
                  .where({id: id})
                  .update({
                    element: element,
                    text: text,
                    textalign: textAlign,
                    textdecoration: textDecoration,
                    backgroundcolor: backgroundColor,
                    color: color,
                    margin: margin,
                    height: height,
                    padding: padding
                  })
                  .returning('id', 'element').toString();
              const updateData = await db.queryObject(updateQuery);
            //   console.log("updated output: ", updateData.rows);
            }
            else {
                // create new row in elements with user's input
                const createQuery = 
                dex("elements").insert({
                    id: id, 
                    element: element,
                    text: text,
                    textalign: textAlign,
                    textdecoration: textDecoration,
                    backgroundcolor: backgroundColor,
                    color: color,
                    margin: margin,
                    height: height,
                    padding: padding, 
                    project_id: project_id
                })
                .returning('id', 'element').toString();
                // console.log('create query: ', createQuery)
                const createData = await db.queryObject(createQuery);
                // console.log("created new row in elements: ", createData.rows);
            }
        })
        ctx.response.status = 200; 
        ctx.response.body = {
          project_id: project_id
        }
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

//project doesn't exist, add row to projects table and add its elements to table
// if(!data.rows.length){
//         let insertQuery = dex("projects").insert(await value).toString(); 
//         const newData = await db.queryObject(insertQuery);
//         // console.log(data);
//     }

// //project exists, loop through elementsArr
// elementsArr.forEach(async el => {
//     //if element already exists, delete from table
//     const elementQuery = 
//       dex
//         .select()
//         .from("elements")
//         .where({project_id: project_id})
//         .union(function() {
//           this.select()
//             .from('elements')
//             .where({id: el.id})
//         })
//         .returning('id', 'element').toString();
//     const elementData = await db.queryObject(elementQuery);
//     // console.log("query output: ", elementData.rows);
//     if(elementData.rows.length > 0){
//       const deleteQuery = dex.from("elements").where({id: el.id}).del().returning('id', 'element').toString();
//       const deleteData = await db.queryObject(deleteQuery);
//       console.log("delete output: ", deleteData.rows);
//     }

//     // create new row in elements with user's input
//     const { element, text, textAlign, textDecoration, backgroundColor, color, margin, height, padding } = el;
//     const createQuery = dex.insert(await element, text, textAlign, textDecoration, backgroundColor, color, margin, height, padding, project_id).into("elements").returning('id', 'element').toString();
//     const createData = await db.queryObject(createQuery);
//     console.log("created: ", createData.rows);
// })
