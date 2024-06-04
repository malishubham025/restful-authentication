const express=require("express");
const {setUser,getUser}=require("./map");
function blockMiddle(req,res,next){
    const id=req.cookies.id;
    console.log(id);
    if(!id || !getUser(id)){
        res.render("login");
    }
    else if(id && getUser(id)){
        res.render("main");
    }
   
}
module.exports=blockMiddle;