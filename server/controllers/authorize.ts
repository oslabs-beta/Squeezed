import { verify } from "https://deno.land/x/djwt@v2.4/mod.ts";
import { key } from "../../utils/apiKey.ts";
import { Context } from "https://deno.land/x/oak/mod.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";


export const authorize = async (ctx: Context, next:any) => {
    try{   
    const {authorization} = await ctx.request.body().value;
    console.log('authorize', authorization)
    if(!authorization) {
        console.log("inside !authorization")
        ctx.response.status = 401;
        return;
    }
    // console.log('before split', authorization)
    // const jwt = authorization.split('.')[2];
    // console.log('jwt and key auth.ts', jwt,key)

    // if(!jwt) {
    //     console.log("inside !jwt")
    //     ctx.response.status = 401;
    //     return;
    // }
    const payload = await verify(authorization, key);
    console.log('payload:', payload);

    if(!payload){
      throw new Error("!payload")
    }
     await next();
     
     } catch (error) {
        console.log("inside error")
        ctx.response.status = 401;
        ctx.response.body ={message: "You are not authorized to access this route"}
        return;
    }
};


// authController.login = (req, res, next) => {
//     const { username, pass } = req.body;
//     if (username !== 'codesmith' && pass !== 'ilovetesting')
//       next('unsuccessful login attempt');
//     else {
//       res.cookie('token', 'admin');
//       next();
//     }
//   };
  