import db from '../db.ts'
import Dex from "https://deno.land/x/dex/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
const dex = Dex({client: 'postgres'});
const salt = await bcrypt.genSalt(10);

import { key } from "../../utils/apiKey.ts";

import { verify, create, getNumericDate } from "https://deno.land/x/djwt@v2.7/mod.ts";
// import { create, setExpiration } from "https://deno.land/x/djwt/create.ts";
import { deleteCookie, setCookie, getCookies } from "https://deno.land/std/http/cookie.ts";
import {Cookie,CookieJar,wrapFetch,} from "https://deno.land/x/another_cookiejar@v4.1.4/mod.ts";


const accountController: any = {};

// accountController.createJwt = async(ctx: any) => {
//     // const key = await crypto.subtle.generateKey(
//     //     { name: "HMAC", hash: "SHA-512" },
//     //     true,
//     //     ["sign", "verify"],
//     // );
//     // console.log('key:', key);

//     const {username, password} = await request.body().value;

//     const header = {
//       alg: "HS512",
//       typ: "JWT",
//     };
    
//     const payload = {
//       username: username,
//       password: password,
//       exp: getNumericDate(60 * 60 * 24),
//     };

//     let jwt = create({header, payload, key});
//     ctx.response.body = jwt;
//     ctx.cookies.set("token", jwt)
// }

// accountController.validate = async(ctx: any) => {
//     let token = ctx.cookies.get("token");
//     if (token) {
//       const result = await verify(token, key, { isThrowing: false });
//       result ? ctx.response.body = "Valid Jwt" : ctx.response.body = "Invalid Jwt";
//       return;
//     }
//     ctx.response.body = "No token in cookies";
// }


accountController.createAccount = async(ctx:any) => {
    try{
        const {username, password, email} = await ctx.request.body().value;
        // console.log('inside account controller:', username, password, email)
        const newPass = await bcrypt.hash(password,salt);
        const user = dex("users").insert({username: username, password: newPass, email: email}).returning(['id','username', 'password','email']).toString();
        const data = await db.queryObject(user);
        // console.log(data.rows[0]);
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

accountController.loginCheck = async(ctx: any) => {    
 try{
    const {username, password} = await ctx.request.body().value;
    // console.log("backend account controller':", username, password);
    const user = dex.select().from("users").where({ username: username }).toString();
    const data = await db.queryObject(user);

    const confirmPassword = await bcrypt.compare(password, data.rows[0].password);
    // console.log("confirmPassword", confirmPassword)
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
    
    if(jwt) {
        ctx.response.status = 200;
        ctx.response.headers.set("Content-Type", "application/json");
        // ctx.response.headers.set("Authorization", jwt);
        ctx.response.body = JSON.stringify({
            userId: data.rows[0].id,
            token: jwt,
            result: confirmPassword
        })
        // console.log('ctx response backend', ctx.response)
        // setCookie(ctx.response.headers, { name: "Name1", value: "Val1" })
        // const cookie = new Cookie({
        //     name: "token",
        //     value: jwt.toString()
        // })
        // console.log('cookie backend',cookie)
        // setCookie(ctx.response.headers, { 
        //     name: "Authorization", 
        //     value: jwt.toString(),
        //     httpOnly: true,
        //     secure: true,
        //     maxAge: 60*60*12
        //  })
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

// accountController.getAll = async(ctx: any) => {    
//     try{
//            let selectQuery = dex.select().from("users").toString();
//            const data = await db.queryObject(selectQuery);
//            ctx.response.body = data.rows;
//            ctx.response.status = 200;
//            return;
//        }
//        catch (err) {
//            ctx.response.body = { status: false, data: null};
//            ctx.response.status = 500;
//            return (err)
//        }
//    }



  export default accountController;