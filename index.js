const express=require("express");
const app=express();
const {v4}=require("uuid");
const cookieParser=require("cookie-parser");
const connection = require("./connection");
app.use(express.urlencoded({extended:true}));
app.set("view engine",'ejs');
app.use(cookieParser());
// app.use(connectionMiddle);
app.get("/",function(req,res){
    res.render("index");
})
const blockMiddle=require("./blockMiddle");
app.get("/main",blockMiddle,function(req,res){
    res.render("main");
})

app.get("/login",function(req,res){
    

    res.render("login");
})

const {setUser,getUser}=require("./map");
app.post("/login",function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    // console.log(username,password);
    
    connection.query("select * from user_login where username=? and password=?",[username,password],(err,result)=>{
        if (result && result.length > 0) {
            const id = v4();
            setUser(id, { username: username, password: password });
            res.cookie('id', id);
            res.render("main");
        }
        else{
            res.render("login");
        }
    })

    
})

app.listen(3000,function(){
    console.log("running");
})