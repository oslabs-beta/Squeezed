import db from '../db.ts'

const projectController: any = {};


projectController.getproject = async({ request, response, params }: { request: any, response: any, params: any }) => {
    try {
      const { id } = request.body;
      const data = await db.queryArray({
          text: `SELECT * FROM projects WHERE account_id = ${id}`
      });
      response.body = {
          status: true,
          data: data.rows[0]
      };
      response.status(200);
    } catch (err) {
      response.body = { status: false, data: null};
      response.status = 500;
      console.log(err);         
    }
};

projectController.saveProject = async({ request, response, params }: { request: any, response: any, params: any }) => {
    try {
        const { id, projectName, code, date } = request.body;
        const data = await db.queryArray({
                text: `INSERT INTO projects (name, code, date, account_id) VALUES (${projectName}, ${code}, ${date}, ${id})`
            });
            response.status(200);  
    } catch (err) {
        response.body = { status: false, data: null};
        response.status = 500;
        console.log(err);
    }
};


export default projectController;