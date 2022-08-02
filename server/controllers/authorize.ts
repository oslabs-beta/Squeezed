import { verify } from "https://deno.land/x/djwt@v2.4/mod.ts";
import { key } from "../../server/utils/apiKey.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";

//checks user credentials to ensure authorization for request
export const authorize = async (ctx: Context, next:any) => {
  try {   
    const {authorization} = await ctx.request.body().value;
    if(!authorization) {
      ctx.response.status = 401;
      return;
    }
    
    const payload = await verify(authorization, key);
    if(!payload){
      throw new Error("!payload")
    }
    await next();
  } 
  catch(error) {
    ctx.response.status = 401;
    ctx.response.body ={message: "You are not authorized to access this route"}
    return;
  }
};
