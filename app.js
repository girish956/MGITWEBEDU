
const express =require("express");
const bodyParser =require("body-parser");
const ejs =require("ejs");
const app=express();
const mongoose=require("mongoose");
const session=require("express-session");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");
const nodemailer=require("nodemailer");
const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
secret:"this is a secret.",
resave:false,
saveUninitialized:false,
maxAge: Date.now() + (86400)
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser:true});

const userSchema = new mongoose.Schema({
email:String,
password:String,
m1:Number,
chem:Number,
bee:Number,
eng:Number,
m2:Number,
ap:Number,
clang:Number,
eg:Number,
ade:Number,
ds:Number,
cosm:Number,
coa:Number,
cpp:Number,
dism:Number,
befa:Number,
os:Number,
dbms:Number,
java:Number,
flat:Number,
se:Number,
cn:Number,
wt:Number,
da:Number,
cg:Number,
ml:Number,
cd:Number,
daa:Number,
sl:Number,
fiot:Number,
enrolledCourses:{ type : Array , "default" : [] }
});

userSchema.plugin(passportLocalMongoose);

const User =new mongoose.model("User",userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const transporter=nodemailer.createTransport({
	service:"hotmail",
	auth:{
        user:"dtesting016@outlook.com",
        pass:"Nezuko@69"
	}
});



app.get("/",function(req,res){
	res.render("home");
});
app.get("/register",function(req,res){
	res.render("register");
});
app.get("/verify",function(req,res){
	res.render("verify");
});
app.get("/courses",function(req,res){
	if (req.isAuthenticated()) {
		res.render("courses");
	}
	else{
		res.redirect("/login");
	}
});
app.get("/login",function(req,res){
	res.render("login");
});

app.post("/firstyear",function(req,res){
	res.render("firstyear");
});
app.post("/secondyear",function(req,res){
	res.render("secondyear");
});
app.post("/thirdyear",function(req,res){
	res.render("thirdyear");
});
app.post("/fourthyear",function(req,res){
	res.render("fourthyear");
});
app.post("/firstsem",function(req,res){
	res.render("firstsem");
});
app.post("/thirdsem",function(req,res){
	res.render("thirdsem");
});

app.post("/secondsem",function(req,res){
	res.render("secondsem");
});app.post("/secondsemcourses",function(req,res){
	res.render("secondsemcourses");
});

app.get("/thirdsem",function(req,res){
	res.render("thirdsem");
});
app.post("/fourthsem",function(req,res){
	res.render("fourthsem");
});
app.post("/fifthsem",function(req,res){
	res.render("fifthsem");
});
app.post("/sixthsem",function(req,res){
	res.render("sixthsem");
});
app.get("/seventhsem",function(req,res){
	res.render("seventhsem");
});
app.get("/eighthsem",function(req,res){
	res.render("eighthsem");
});
app.post("/firstsemcsecourses",function(req,res){
   
res.render("firstsemcsecourses");});
app.post("/fifthsemcourses",function(req,res){
   
res.render("fifthsemcourses");});
app.post("/sixthsemcourses",function(req,res){
   
res.render("sixthsemcourses");});
app.post("/thirdsemcourses",function(req,res){
   
res.render("thirdsemcourses");});
app.post("/fourthsemcourses",function(req,res){
   
res.render("fourthsemcourses");});
app.get("/clangresourses1",function(req,res){
	res.render("clangresourses1");
});
app.post("/clangquiz1",function(req,res){
	res.render("clangquiz1");
});
app.get("/clangresourses2",function(req,res){
	res.render("clangresourses2");
});
app.post("/clangquiz2",function(req,res){
	res.render("clangquiz2");
});
app.get("/clangresourses3",function(req,res){
	res.render("clangresourses3");
});
app.post("/clangquiz3",function(req,res){
	res.render("clangquiz3");
});
app.get("/clangresourses4",function(req,res){
	res.render("clangresourses4");
});
app.post("/clangquiz4",function(req,res){
	res.render("clangquiz4");
});
app.get("/clangresourses5",function(req,res){
	res.render("clangresourses5");
});
app.post("/clangquiz5",function(req,res){
	res.render("clangquiz5");
});
app.get("/clangresourses6",function(req,res){
	res.render("clangresourses6");
});
app.post("/clangquiz6",function(req,res){
	res.render("clangquiz6");
});
app.get("/clangresourses7",function(req,res){
	res.render("clangresourses7");
});
app.post("/clangquiz7",function(req,res){
	res.render("clangquiz7");
});
app.get("/clangresourses8",function(req,res){
	res.render("clangresourses8");
});
app.post("/clangquiz8",function(req,res){
	res.render("clangquiz8");
});
app.get("/clangresourses9",function(req,res){
	res.render("clangresourses9");
});
app.post("/clangquiz9",function(req,res){
	res.render("clangquiz9");
});app.get("/clangresourses10",function(req,res){
	res.render("clangresourses10");
});
app.post("/clangquiz10",function(req,res){
	res.render("clangquiz10");
});app.get("/clangresourses11",function(req,res){
	res.render("clangresourses11");
});
app.post("/clangquiz11",function(req,res){
	res.render("clangquiz11");
});app.get("/clangresourses12",function(req,res){
	res.render("clangresourses12");
});
app.post("/clangquiz12",function(req,res){
	res.render("clangquiz12");
});
app.post("/clanggradedquiz",function(req,res){
	res.render("clanggradedquiz");
});
app.post("/clangcertificate",function(req,res){
    perc=req.body.getpercentage;
    if(perc<75){
      res.write('<h2>You are NOT eligible  to get certificate</h2>');res.end();}
	else{
		
   User.findOneAndUpdate(
   { username:req.session.passport.user }, 
   { $set: {
   		clang:1
   	} },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);

            
        }
    });

	
res.write('<h2>You are eligible  to get certificate</h2><a href="resources/Certificate.pdf" download>Click here to download certificate</a>');res.end();

	}
	
});

app.get("/m1resourses1",function(req,res){
	res.render("m1resourses1");
});
app.post("/m1quiz1",function(req,res){
	res.render("m1quiz1");
});
app.get("/m1resourses2",function(req,res){
	res.render("m1resourses2");
});
app.post("/m1quiz2",function(req,res){
	res.render("m1quiz2");
});
app.get("/m1resourses3",function(req,res){
	res.render("m1resourses3");
});
app.post("/m1quiz3",function(req,res){
	res.render("m1quiz3");
});
app.get("/m1resourses4",function(req,res){
	res.render("m1resourses4");
});
app.post("/m1quiz4",function(req,res){
	res.render("m1quiz4");
});
app.get("/m1resourses5",function(req,res){
	res.render("m1resourses5");
});
app.post("/m1quiz5",function(req,res){
	res.render("m1quiz5");
});
app.get("/m1resourses6",function(req,res){
	res.render("m1resourses6");
});
app.post("/m1quiz6",function(req,res){
	res.render("m1quiz6");
});app.get("/m1resourses7",function(req,res){
	res.render("m1resourses7");
});
app.post("/m1quiz7",function(req,res){
	res.render("m1quiz7");
});app.get("/m1resourses8",function(req,res){
	res.render("m1resourses8");
});
app.post("/m1quiz8",function(req,res){
	res.render("m1quiz8");
});app.get("/m1resourses9",function(req,res){
	res.render("m1resourses9");
});
app.post("/m1quiz9",function(req,res){
	res.render("m1quiz9");
});
app.post("/m1gradedquiz",function(req,res){
	res.render("m1gradedquiz");
});
app.post("/m1certificate",function(req,res){
    perc=req.body.getpercentage;
    if(perc<75){
      res.write('<h2>You are NOT eligible  to get certificate</h2>');res.end();}
	else{
		User.findOneAndUpdate(
   { username:req.session.passport.user }, 
   { $set: {
   		m1:1
   	} },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);

            
        }
    });

res.write('<h2>You are eligible  to get certificate</h2>');res.end();
	
	}
	
});
app.post("/clang",function(req,res){
	var user=req.session.passport.user;
    flag=0;
	User.findOne({username:user }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
    for (let i = 0; i < docs['enrolledCourses'].length; i++) {
    if(docs['enrolledCourses'][i]=="C Programming"){
    flag=1;break;
    }
    }
    if(flag==1){res.render("unsuccessfulenroll");	
    }
    else{
	
	res.render("clang");}}
})});
app.post("/m1",function(req,res){
	var user=req.session.passport.user;
    flag=0;
	User.findOne({username:user }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
    for (let i = 0; i < docs['enrolledCourses'].length; i++) {
    if(docs['enrolledCourses'][i]=="Mathematics 1"){
    flag=1;break;
    }

    }
    if(flag==1){res.render("m1unsuccessfulenroll");	
    }
    else{
	
	res.render("m1");}}
})});
app.post("/chem",function(req,res){
	var user=req.session.passport.user;
    flag=0;
	User.findOne({username:user }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
    for (let i = 0; i < docs['enrolledCourses'].length; i++) {
    if(docs['enrolledCourses'][i]=="Chemistry"){
    flag=1;break;
    }

    }
    if(flag==1){res.render("chemunsuccessenroll");	
    }
    else{
	
	res.render("chem");}}
})});
app.get("/chemresourses1",function(req,res){
	res.render("chemresourses1");
});
app.post("/chemquiz1",function(req,res){
	res.render("chemquiz1");
});
app.get("/chemresourses2",function(req,res){
	res.render("chemresourses2");
});
app.post("/chemquiz2",function(req,res){
	res.render("chemquiz2");
});
app.get("/chemresourses3",function(req,res){
	res.render("chemresourses3");
});
app.post("/chemquiz3",function(req,res){
	res.render("chemquiz3");
});
app.get("/chemresourses4",function(req,res){
	res.render("chemresourses4");
});
app.post("/chemquiz4",function(req,res){
	res.render("chemquiz4");
});
app.get("/chemresourses5",function(req,res){
	res.render("chemresourses5");
});
app.post("/chemquiz5",function(req,res){
	res.render("chemquiz5");
});
app.get("/chemresourses6",function(req,res){
	res.render("chemresourses6");
});
app.post("/chemquiz6",function(req,res){
	res.render("chemquiz6");
});app.get("/chemresourses7",function(req,res){
	res.render("chemresourses7");
});
app.post("/chemquiz7",function(req,res){
	res.render("chemquiz7");
});app.get("/chemresourses8",function(req,res){
	res.render("chemresourses8");
});
app.post("/chemquiz8",function(req,res){
	res.render("chemquiz8");
});app.get("/chemresourses9",function(req,res){
	res.render("chemresourses9");
});
app.post("/chemquiz9",function(req,res){
	res.render("chemquiz9");
});
app.post("/chemgradedquiz",function(req,res){
	res.render("chemgradedquiz");
});
app.post("/chemcertificate",function(req,res){
    perc=req.body.getpercentage;
    if(perc<75){

      res.write('<h2>You are NOT eligible  to get certificate</h2>');res.end();}
	else{
res.write('<h2>You are eligible  to get certificate</h2>');res.end();
	
	}
	
});
app.post("/bee",function(req,res){
	var user=req.session.passport.user;
    flag=0;
	User.findOne({username:user }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
    for (let i = 0; i < docs['enrolledCourses'].length; i++) {
    if(docs['enrolledCourses'][i]=="B E E"){
    flag=1;break;
    }

    }
    if(flag==1){res.render("beeunsuccessenroll");	
    }
    else{
	
	res.render("bee");}}
})});
app.get("/beeresourses1",function(req,res){
	res.render("beeresourses1");
});
app.post("/beequiz1",function(req,res){
	res.render("beequiz1");
});
app.get("/beeresourses2",function(req,res){
	res.render("beeresourses2");
});
app.post("/beequiz2",function(req,res){
	res.render("beequiz2");
});
app.get("/beeresourses3",function(req,res){
	res.render("beeresourses3");
});
app.post("/beequiz3",function(req,res){
	res.render("beequiz3");
});
app.get("/beeresourses4",function(req,res){
	res.render("beeresourses4");
});
app.post("/chemquiz4",function(req,res){
	res.render("chemquiz4");
});
app.get("/beeresourses5",function(req,res){
	res.render("beeresourses5");
});
app.post("/beequiz5",function(req,res){
	res.render("beequiz5");
});
app.get("/beeresourses6",function(req,res){
	res.render("beeresourses6");
});
app.post("/beequiz6",function(req,res){
	res.render("beequiz6");
});app.get("/beeresourses7",function(req,res){
	res.render("beeresourses7");
});
app.post("/beequiz7",function(req,res){
	res.render("beequiz7");
});app.get("/beeresourses8",function(req,res){
	res.render("beeresourses8");
});
app.post("/beequiz8",function(req,res){
	res.render("beequiz8");
});
app.post("/beegradedquiz",function(req,res){
	res.render("beegradedquiz");
});
app.post("/beecertificate",function(req,res){
    perc=req.body.getpercentage;
    if(perc<75){
      res.write('<h2>You are NOT eligible  to get certificate</h2>');res.end();}
	else{
res.write('<h2>You are eligible  to get certificate</h2>');res.end();
	
	}
	
});
app.post("/eng",function(req,res){
	var user=req.session.passport.user;
    flag=0;
	User.findOne({username:user }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
    for (let i = 0; i < docs['enrolledCourses'].length; i++) {
    if(docs['enrolledCourses'][i]=="English"){
    flag=1;break;
    }

    }
    if(flag==1){res.render("engunsuccessenroll");	
    }
    else{
	
	res.render("eng");}}
})});
app.get("/engresourses1",function(req,res){
	res.render("engresourses1");
});
app.post("/engquiz1",function(req,res){
	res.render("engquiz1");
});
app.get("/engresourses2",function(req,res){
	res.render("engresourses2");
});
app.post("/engquiz2",function(req,res){
	res.render("engquiz2");
});
app.get("engresourses3",function(req,res){
	res.render("engresourses3");
});
app.post("/engquiz3",function(req,res){
	res.render("engquiz3");
});
app.get("/engresourses4",function(req,res){
	res.render("beeresourses4");
});
app.post("/engquiz4",function(req,res){
	res.render("chemquiz4");
});
app.get("/engresourses5",function(req,res){
	res.render("engresourses5");
});
app.post("/engquiz5",function(req,res){
	res.render("engquiz5");
});
app.get("/engresourses6",function(req,res){
	res.render("engresourses6");
});
app.post("/engquiz6",function(req,res){
	res.render("engquiz6");
});app.get("/engresourses7",function(req,res){
	res.render("engresourses7");
});
app.post("/engquiz7",function(req,res){
	res.render("engquiz7");
});app.get("/engresourses8",function(req,res){
	res.render("engresourses8");
});
app.post("/engquiz8",function(req,res){
	res.render("engquiz8");
});
app.post("/beegradedquiz",function(req,res){
	res.render("beegradedquiz");
});
app.post("/beecertificate",function(req,res){
    perc=req.body.getpercentage;
    if(perc<75){
      res.write('<h2>You are NOT eligible  to get certificate</h2>');res.end();}
	else{
res.write('<h2>You are eligible  to get certificate</h2>');res.end();
	
	}
	
});
app.get("/enrolledcourses",function(req,res){
	var user=req.session.passport.user;
	if(req.isAuthenticated()){
     User.findOne({username:user }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
          res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/styles.css"><style type="text/css"> @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";body { background-color: #fff; font-family: "Poppins", sans-serif;}.container { position: absolute; height: 300px; width: 100%; top: 150px;left: calc(50% - 650px); display: flex;}.card { display: flex; height: 280px; width: 400px; background-color: #6d7fcc; border-radius: 10px; box-shadow: 0rem 0 4rem #28282B; transition: 0.4s ease-out; position: relative; left: 0px;}.card:not(:first-child) { margin-left: -50px;}.card:hover { transform: translateY(-20px); transition: 0.4s ease-out;}.card:hover ~ .card { position: relative; left: 50px; transition: 0.4s ease-out;}.title { color: white; font-weight: 200; position: absolute; left: 20px; top: 15px;}.bar { position: absolute; top: 100px; left: 20px; height: 5px; width: 150px;}.emptybar { background-color: #fff; width: 100%; height: 100%;}.filledbar { position: absolute; top: 0px; z-index: 3; width: 0px; height: 100%; background: rgb(0,154,217); background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,1) 100%); transition: 0.6s ease-out;}.card:hover .filledbar { width: 120px; transition: 0.4s ease-out;}.circle { position: absolute; top: 150px; left: calc(50% - 60px);}.stroke { stroke: white; stroke-dasharray: 360; stroke-dashoffset: 360; transition: 0.6s ease-out;}svg { fill: #6d7fcc; stroke-width: 2px;}.card:hover .stroke { stroke-dashoffset: 100; transition: 0.6s ease-out;}.button{ z-index:-1; position:absolute; margin-top:200px; margin-left:60px; border-style: none; background-color: #fff; border-radius: 40px; }.card:hover .button{ z-index:4; background-color:white ; color: #6d7fcc; } .courses{ margin-right: 700px; margin-top: 50px; } .footer{ margin-top: 300px; } .profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;font-weight: 300;text-align: center;}.profile:hover { background-color: #846bfb;border-radius: 40px;} </style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body><div class="t"> <div class="header"> <nav class="navbar navbar-expand-lg navbar-light "> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 100px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div><div class="courses"> <div class="container">');

     for (let i = 0; i < docs['enrolledCourses'].length; i++) {
    
   
   res.write('<form action="/'+docs['enrolledCourses'][i]+'"'+'method="POST"><div class="card" style="width: 18rem;"> <div class="card-body"> <h5 class="card-title">'+docs['enrolledCourses'][i]+'</h5> <button type="submit" class="btn btn-dark">Go to Course</button> </div></form>');
 
     }
   res.write('</body></html>');
   res.end();
}});
	
}
else{
		res.redirect("/login");
	}
});
app.post("/C%20Programming",function(req,res){
	res.render("clangcourse");
});
app.post("/Mathematics%201",function(req,res){
	res.render("m1course");
});
app.post("/Chemistry",function(req,res){
	res.render("chemcourse");
});
app.post("/B%20E%20E",function(req,res){
	res.render("beecourse");
});
app.post("/English",function(req,res){
	res.render("engcourse");
});
app.post("/clangcourse",function(req,res){
	res.render("clangcourse");
});
app.post("/m1course",function(req,res){
	res.render("m1course");
});app.post("/chemcourse",function(req,res){
	res.render("chemcourse");
});
app.post("/beecourse",function(req,res){
	res.render("beecourse");
});
app.post("/engcourse",function(req,res){
	res.render("engcourse");
});
app.post("/enroll",function(req,res){
flag=0;
var user=req.session.passport.user;

User.findOne({username:user }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{if(docs['enrolledCourses'].length==0){  User.findOneAndUpdate(
   { username: user }, 
   { $push: {
   		enrolledCourses:req.body.coursename
   	} },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);

          res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>C Programming </h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/clangcourse" method="POST"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to Course</button> </form> </div> </nav> <div class="alert alert-success" role="alert"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Enrollment Successful</div> <div id="about"><h2>About the course</h2> <p>Introduction to Programming, Arrays, Strings, Structures, and Pointers, C Reprocessor and File Handling, Function and Dynamic Memory Allocation, and Introduction to Algorithms are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> To learn the fundamentals of computers. </li> <li> To understand the various steps in program development. </li> <li> To learn the syntax and semantics of C programming language. </li> <li> To learn the usage of structured programming approach in solving problems. </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> To write algorithms and to draw flowcharts for solving problems. </li> <li> To convert the algorithms/flowcharts to C programs. </li> <li> To code and test a given logic in C programming language. </li> <li> To decompose a problem into functions and to develop modular reusable code. </li> <li> To use arrays, pointers, strings and structures to write C programs. </li> <li> Searching and sorting problems. </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b> Introduction to ProgrammingIntroduction to components of a computer system: disks, primary and secondary memory, processor, operating system, compilers, creating, compiling and executing a program etc..Number systems. </li><br> <li> <b>Week 2 :</b> Introduction to Algorithms: steps to solve logical and numerical problems. Representation ofAlgorithm, Flowchart/Pseudo code with examples, Program design and structured programming. </li><br> <li> <b>Week 3 :</b> Introduction to C Programming Language: variables (with data types and space requirements), Syntax and Logical Errorsin compilation, object and executable code Operators, expressions and precedence, Expression evaluation, Storage classes (auto, extern, static and register), type conversion. The main method and command line arguments Bitwise operations: Bitwise AND, OR, XOR and NOT operators. </li><br> <li> <b>Week 4 :</b> Conditional Branching and Loops: Writing and evaluation of conditionals and consequentbranching with if, if-else, switch-case, temary operator, goto, Iteration with for, while, do while loopsI/O: Simple input and output with scanf and printf, formatted I/O, Introduction to stdin, stdout and stderr Command line arguments. </li><br> <li> <b>Week 5 :</b> Arrays, Strings, Structures and Pointers:Arrays one and two dimensional arrays, creating, accessing and manipulating elements of arrays.Strings:Introduction to strings, handling strings as array of characters, basic string functions available in C(stlen, streat, stropy, strstr elc), arrays of strings Structures Defining structures, initializing structures, unions, Array of structures. </li><br> <li> <b>Week 6 :</b> Pointers: Idea of pointers, Defining pointers, Pointers to Arrays and Structures, Use of Pointers in self-referential structures, usage of self referential structures in linked list (no implementation) Enumeration data type. </li><br> <li> <b>Week 7 :</b> Preprocessor and File handling in C: Preprocessor: Commonly used Preprocessor commands like include, define, undef, if, ifdef,ifndef </li><br> <li> <b>Week 8 :</b> Files: Text and Binary files. Creating and Reading and writing text and binary files, Appending data to existing files, Writing and reading structures using binary files, Random access using fseek, ftell and rewind functions. </li><br> <li> <b>Week 9 :</b> Function and Dynamic Memory Allocation:Functions: Designing structured programs. Declaring a function. Signature of a function. Parameters and return type of a function, passing parameters to functions, call by value,Passing arrays to functions, passing pointers to functions, idea of call by reference, Some C standard functions and libraries </li><br> <li> <b>Week 10 :</b> Recursion: Simple programs, such as Finding Factorial, Fibonacci series etc., Limitations of Recursive functions Dynamic memory allocation: Allocating and freeing memory, Allocating memory for arrays of different data types </li><br> <li> <b>Week 11 :</b> Introduction to Algorithms: Algorithms for finding roots of a quadratic equations, finding minimum and maximum numbers of a given set, finding if a number is prime number, etc. Basic searching in an array of elements (linear and binary search techniques). </li><br> <li> <b>Week 12 :</b> Basic algorithms to sort array of elements (Bubble, Insertion and Selection sort algorithms. Basic concept of order of complexity through the example programs. </li> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>Nagi Reddy</p> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script> <script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script></body></html>');            
        }
    });}
    	else{
    	for (let i = 0; i < docs['enrolledCourses'].length; i++) {
    if( req.body.coursename!=docs['enrolledCourses'][i]){
     flag=1;break;
    }
   
}

if(flag==1){
User.findOneAndUpdate(
   { username: user }, 
   { $push: {
   		enrolledCourses:req.body.coursename
   	} },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
         console.log(success);
         res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>C Programming </h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/clangcourse" method="POST"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to Course</button> </form> </div> </nav> <div class="alert alert-success" role="alert"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Enrollment Successful</div> <div id="about"><h2>About the course</h2> <p>Introduction to Programming, Arrays, Strings, Structures, and Pointers, C Reprocessor and File Handling, Function and Dynamic Memory Allocation, and Introduction to Algorithms are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> To learn the fundamentals of computers. </li> <li> To understand the various steps in program development. </li> <li> To learn the syntax and semantics of C programming language. </li> <li> To learn the usage of structured programming approach in solving problems. </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> To write algorithms and to draw flowcharts for solving problems. </li> <li> To convert the algorithms/flowcharts to C programs. </li> <li> To code and test a given logic in C programming language. </li> <li> To decompose a problem into functions and to develop modular reusable code. </li> <li> To use arrays, pointers, strings and structures to write C programs. </li> <li> Searching and sorting problems. </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b> Introduction to ProgrammingIntroduction to components of a computer system: disks, primary and secondary memory, processor, operating system, compilers, creating, compiling and executing a program etc..Number systems. </li><br> <li> <b>Week 2 :</b> Introduction to Algorithms: steps to solve logical and numerical problems. Representation ofAlgorithm, Flowchart/Pseudo code with examples, Program design and structured programming. </li><br> <li> <b>Week 3 :</b> Introduction to C Programming Language: variables (with data types and space requirements), Syntax and Logical Errorsin compilation, object and executable code Operators, expressions and precedence, Expression evaluation, Storage classes (auto, extern, static and register), type conversion. The main method and command line arguments Bitwise operations: Bitwise AND, OR, XOR and NOT operators. </li><br> <li> <b>Week 4 :</b> Conditional Branching and Loops: Writing and evaluation of conditionals and consequentbranching with if, if-else, switch-case, temary operator, goto, Iteration with for, while, do while loopsI/O: Simple input and output with scanf and printf, formatted I/O, Introduction to stdin, stdout and stderr Command line arguments. </li><br> <li> <b>Week 5 :</b> Arrays, Strings, Structures and Pointers:Arrays one and two dimensional arrays, creating, accessing and manipulating elements of arrays.Strings:Introduction to strings, handling strings as array of characters, basic string functions available in C(stlen, streat, stropy, strstr elc), arrays of strings Structures Defining structures, initializing structures, unions, Array of structures. </li><br> <li> <b>Week 6 :</b> Pointers: Idea of pointers, Defining pointers, Pointers to Arrays and Structures, Use of Pointers in self-referential structures, usage of self referential structures in linked list (no implementation) Enumeration data type. </li><br> <li> <b>Week 7 :</b> Preprocessor and File handling in C: Preprocessor: Commonly used Preprocessor commands like include, define, undef, if, ifdef,ifndef </li><br> <li> <b>Week 8 :</b> Files: Text and Binary files. Creating and Reading and writing text and binary files, Appending data to existing files, Writing and reading structures using binary files, Random access using fseek, ftell and rewind functions. </li><br> <li> <b>Week 9 :</b> Function and Dynamic Memory Allocation:Functions: Designing structured programs. Declaring a function. Signature of a function. Parameters and return type of a function, passing parameters to functions, call by value,Passing arrays to functions, passing pointers to functions, idea of call by reference, Some C standard functions and libraries </li><br> <li> <b>Week 10 :</b> Recursion: Simple programs, such as Finding Factorial, Fibonacci series etc., Limitations of Recursive functions Dynamic memory allocation: Allocating and freeing memory, Allocating memory for arrays of different data types </li><br> <li> <b>Week 11 :</b> Introduction to Algorithms: Algorithms for finding roots of a quadratic equations, finding minimum and maximum numbers of a given set, finding if a number is prime number, etc. Basic searching in an array of elements (linear and binary search techniques). </li><br> <li> <b>Week 12 :</b> Basic algorithms to sort array of elements (Bubble, Insertion and Selection sort algorithms. Basic concept of order of complexity through the example programs. </li> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>Nagi Reddy</p> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script> <script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script></body></html>');            


}    });
}
else{
    	console.log("Already Registered");
    	res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>C Programming </h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/clangcourse" method="POST"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to Course</button> </form> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> </div> </nav> <div role="alert" class="alert alert-danger"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Already Enrolled</div> <div id="about"><h2>About the course</h2> <p>Introduction to Programming, Arrays, Strings, Structures, and Pointers, C Reprocessor and File Handling, Function and Dynamic Memory Allocation, and Introduction to Algorithms are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> To learn the fundamentals of computers. </li> <li> To understand the various steps in program development. </li> <li> To learn the syntax and semantics of C programming language. </li> <li> To learn the usage of structured programming approach in solving problems. </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> To write algorithms and to draw flowcharts for solving problems. </li> <li> To convert the algorithms/flowcharts to C programs. </li> <li> To code and test a given logic in C programming language. </li> <li> To decompose a problem into functions and to develop modular reusable code. </li> <li> To use arrays, pointers, strings and structures to write C programs. </li> <li> Searching and sorting problems. </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b> Introduction to ProgrammingIntroduction to components of a computer system: disks, primary and secondary memory, processor, operating system, compilers, creating, compiling and executing a program etc..Number systems. </li><br> <li> <b>Week 2 :</b> Introduction to Algorithms: steps to solve logical and numerical problems. Representation ofAlgorithm, Flowchart/Pseudo code with examples, Program design and structured programming. </li><br> <li> <b>Week 3 :</b> Introduction to C Programming Language: variables (with data types and space requirements), Syntax and Logical Errorsin compilation, object and executable code Operators, expressions and precedence, Expression evaluation, Storage classes (auto, extern, static and register), type conversion. The main method and command line arguments Bitwise operations: Bitwise AND, OR, XOR and NOT operators. </li><br> <li> <b>Week 4 :</b> Conditional Branching and Loops: Writing and evaluation of conditionals and consequentbranching with if, if-else, switch-case, temary operator, goto, Iteration with for, while, do while loopsI/O: Simple input and output with scanf and printf, formatted I/O, Introduction to stdin, stdout and stderr Command line arguments. </li><br> <li> <b>Week 5 :</b> Arrays, Strings, Structures and Pointers:Arrays one and two dimensional arrays, creating, accessing and manipulating elements of arrays.Strings:Introduction to strings, handling strings as array of characters, basic string functions available in C(stlen, streat, stropy, strstr elc), arrays of strings Structures Defining structures, initializing structures, unions, Array of structures. </li><br> <li> <b>Week 6 :</b> Pointers: Idea of pointers, Defining pointers, Pointers to Arrays and Structures, Use of Pointers in self-referential structures, usage of self referential structures in linked list (no implementation) Enumeration data type. </li><br> <li> <b>Week 7 :</b> Preprocessor and File handling in C: Preprocessor: Commonly used Preprocessor commands like include, define, undef, if, ifdef,ifndef </li><br> <li> <b>Week 8 :</b> Files: Text and Binary files. Creating and Reading and writing text and binary files, Appending data to existing files, Writing and reading structures using binary files, Random access using fseek, ftell and rewind functions. </li><br> <li> <b>Week 9 :</b> Function and Dynamic Memory Allocation:Functions: Designing structured programs. Declaring a function. Signature of a function. Parameters and return type of a function, passing parameters to functions, call by value,Passing arrays to functions, passing pointers to functions, idea of call by reference, Some C standard functions and libraries </li><br> <li> <b>Week 10 :</b> Recursion: Simple programs, such as Finding Factorial, Fibonacci series etc., Limitations of Recursive functions Dynamic memory allocation: Allocating and freeing memory, Allocating memory for arrays of different data types </li><br> <li> <b>Week 11 :</b> Introduction to Algorithms: Algorithms for finding roots of a quadratic equations, finding minimum and maximum numbers of a given set, finding if a number is prime number, etc. Basic searching in an array of elements (linear and binary search techniques). </li><br> <li> <b>Week 12 :</b> Basic algorithms to sort array of elements (Bubble, Insertion and Selection sort algorithms. Basic concept of order of complexity through the example programs. </li> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>Nagi Reddy</p> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script> <script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script></body></html');
    	res.end();	
}
        
    }}
});


});
app.post("/m1enroll",function(req,res){

flag=0;
var user=req.session.passport.user;

User.findOne({username:user }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{if(docs['enrolledCourses'].length==0){  User.findOneAndUpdate(
   { username: user }, 
   { $push: {
   		enrolledCourses:req.body.coursename
   	} },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);
            res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>Mathematics 1</h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/m1course" method="POST"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to Course</button> </form> </div> </nav> <div class="alert alert-success" role="alert"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Enrollment Successful</div> <div id="about"><h2>About the course</h2> <p>Introduction to Matrices, Eigen values and Eigen vectors, Sequences & Series,Calculus and Multivariable calculus (Partial Differentiation and application are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> Types of matrices and their properties </li> <li> Concept of a rank of the matrix and applying this concept to know the consistency and solving the system of linear equations </li> <li> Concept of Eigen values and eigenvectors and to reduce the quadratic form to canonical form </li> <li> Concept of Sequence. </li> <li> Concept of nature of the series </li> <li> Geometrical approach to the mean value theorems and their application to the mathematical problems. </li> <li> Evaluation of surface areas and volumes of revolutions of curve </li> <li> Evaluation of improper integrals using Beta and Gamma functions. </li> <li> Partial differentiation, concept of total derivatives </li> <li> Finding maxima and minima of function of two and three variables </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> Write the matrix representation of a set of linear equations and to analyse the solution of the system of equations </li> <li> Find the Eigen values and Eigen vector </li> <li> Reduce the quadratic form to canonical form using orthogonal transformations </li> <li> Analyse the nature of sequence and series. </li> <li> Solve the applications on the mean value theorem </li> <li> Evaluate the improper integrals using Beta and Gamma function </li> <li> Find the extreme values of functions of two variables with/ without constrain </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b>Types of Matrices, Symmetric, Hermitian, Skew-symmetric, Skew-Hermitian, orthogonal matrices; Unitary Matrices, Rank of a matrix by Echelon form and Normal form ,Inverse of Non-singular matrices by Gauss-Jordan method . </li><br> <li> <b>Week 2 :</b> System of linear equations: Solving system of Homogeneous and Non-Homogeneous equations, Gauss elimination method, Gauss Seidel Iteration Method. </li><br> <li> <b>Week 3 :</b> Linear Transformation and Orthogonal Transformation: Eigen values and Eigen vectors ,Diagonalization of a matrix ,Cayley-Hamilton Theorem (without proof) </li><br> <li> <b>Week 4 :</b> Finding inverse and power of a matrix by Cayley-Hamilton Theorem, Quadratic forms and Nature of the Quadratic Forms, Reduction of Quadratic form to canonical forms by Orthogonal Transformation. </li><br> <li> <b>Week 5 :</b>Sequence: Definition of a sequence, Limit, Convergent, Divergent and Oscillatory sequences </li><br> <li> <b>Week 6 :</b> Series: Convergent, Divergent and Oscillatory Series, Series of positive terms, Comparison test ,p-test D-Alembert’s ratio test </li><br> <li> <b>Week 7 :</b> Raabe’s test, Cauchy’s Integral test, Cauchy’s root test, Logarithmic test, Alternating series: Leibnitz test, Alternating convergent series: Absolute and Conditionally Convergence </li><br> <li> <b>Week 8 :</b> Mean value theorems: Rolle’s theorem with Geometrical Interpretation and applications, Lagrange’s Mean value theorem with Geometrical Interpretation and applications, Cauchy’s Mean value Theorem Taylor’s Series, Applications of definite integrals to evaluate surface areas and volumes of revolutions of curves (Only in Cartesian coordinates) ,Definition of Improper Integral: Beta and Gamma functions and their applications.. </li><br> <li> <b>Week 9 :</b> Definitions of Limit and continuity ,Partial Differentiation ,Euler’s Theorem, Total derivative ,Jacobian Functional dependence & independence ,Maxima and minima of functions of two variables and three variables using method of Lagrange multipliers . </li><br> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>Dr.M V Ramana Murthy</p> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script><script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script</body></html>');
            
        }
    });}
    	else{
    	for (let i = 0; i < docs['enrolledCourses'].length; i++) {
    if( req.body.coursename!=docs['enrolledCourses'][i]){
     flag=1;break;
    }
   
}

if(flag==1){
User.findOneAndUpdate(
   { username: user }, 
   { $push: {
   		enrolledCourses:req.body.coursename
   	} },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);

            res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>Mathematics 1</h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/m1course" method="POST"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to Course</button> </form> </div> </nav> <div class="alert alert-success" role="alert"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Enrollment Successful</div> <div id="about"><h2>About the course</h2> <p>Introduction to Matrices, Eigen values and Eigen vectors, Sequences & Series,Calculus and Multivariable calculus (Partial Differentiation and application are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> Types of matrices and their properties </li> <li> Concept of a rank of the matrix and applying this concept to know the consistency and solving the system of linear equations </li> <li> Concept of Eigen values and eigenvectors and to reduce the quadratic form to canonical form </li> <li> Concept of Sequence. </li> <li> Concept of nature of the series </li> <li> Geometrical approach to the mean value theorems and their application to the mathematical problems. </li> <li> Evaluation of surface areas and volumes of revolutions of curve </li> <li> Evaluation of improper integrals using Beta and Gamma functions. </li> <li> Partial differentiation, concept of total derivatives </li> <li> Finding maxima and minima of function of two and three variables </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> Write the matrix representation of a set of linear equations and to analyse the solution of the system of equations </li> <li> Find the Eigen values and Eigen vector </li> <li> Reduce the quadratic form to canonical form using orthogonal transformations </li> <li> Analyse the nature of sequence and series. </li> <li> Solve the applications on the mean value theorem </li> <li> Evaluate the improper integrals using Beta and Gamma function </li> <li> Find the extreme values of functions of two variables with/ without constrain </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b>Types of Matrices, Symmetric, Hermitian, Skew-symmetric, Skew-Hermitian, orthogonal matrices; Unitary Matrices, Rank of a matrix by Echelon form and Normal form ,Inverse of Non-singular matrices by Gauss-Jordan method . </li><br> <li> <b>Week 2 :</b> System of linear equations: Solving system of Homogeneous and Non-Homogeneous equations, Gauss elimination method, Gauss Seidel Iteration Method. </li><br> <li> <b>Week 3 :</b> Linear Transformation and Orthogonal Transformation: Eigen values and Eigen vectors ,Diagonalization of a matrix ,Cayley-Hamilton Theorem (without proof) </li><br> <li> <b>Week 4 :</b> Finding inverse and power of a matrix by Cayley-Hamilton Theorem, Quadratic forms and Nature of the Quadratic Forms, Reduction of Quadratic form to canonical forms by Orthogonal Transformation. </li><br> <li> <b>Week 5 :</b>Sequence: Definition of a sequence, Limit, Convergent, Divergent and Oscillatory sequences </li><br> <li> <b>Week 6 :</b> Series: Convergent, Divergent and Oscillatory Series, Series of positive terms, Comparison test ,p-test D-Alembert’s ratio test </li><br> <li> <b>Week 7 :</b> Raabe’s test, Cauchy’s Integral test, Cauchy’s root test, Logarithmic test, Alternating series: Leibnitz test, Alternating convergent series: Absolute and Conditionally Convergence </li><br> <li> <b>Week 8 :</b> Mean value theorems: Rolle’s theorem with Geometrical Interpretation and applications, Lagrange’s Mean value theorem with Geometrical Interpretation and applications, Cauchy’s Mean value Theorem Taylor’s Series, Applications of definite integrals to evaluate surface areas and volumes of revolutions of curves (Only in Cartesian coordinates) ,Definition of Improper Integral: Beta and Gamma functions and their applications.. </li><br> <li> <b>Week 9 :</b> Definitions of Limit and continuity ,Partial Differentiation ,Euler’s Theorem, Total derivative ,Jacobian Functional dependence & independence ,Maxima and minima of functions of two variables and three variables using method of Lagrange multipliers . </li><br> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>Dr.M V Ramana Murthy</p> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script><script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script</body></html>');
            
        }
    });
}
else{
    	console.log("Already Registered");
        res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div>> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>Mathematics 1</h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/m1course" method="POST"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to Course</button> </form> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> </div> </nav> <div role="alert" class="alert alert-danger"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Already Enrolled</div> <div id="about"><h2>About the course</h2> <p>Introduction to Matrices, Eigen values and Eigen vectors, Sequences & Series,Calculus and Multivariable calculus (Partial Differentiation and application are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> Types of matrices and their properties </li> <li> Concept of a rank of the matrix and applying this concept to know the consistency and solving the system of linear equations </li> <li> Concept of Eigen values and eigenvectors and to reduce the quadratic form to canonical form </li> <li> Concept of Sequence. </li> <li> Concept of nature of the series </li> <li> Geometrical approach to the mean value theorems and their application to the mathematical problems. </li> <li> Evaluation of surface areas and volumes of revolutions of curve </li> <li> Evaluation of improper integrals using Beta and Gamma functions. </li> <li> Partial differentiation, concept of total derivatives </li> <li> Finding maxima and minima of function of two and three variables </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> Write the matrix representation of a set of linear equations and to analyse the solution of the system of equations </li> <li> Find the Eigen values and Eigen vector </li> <li> Reduce the quadratic form to canonical form using orthogonal transformations </li> <li> Analyse the nature of sequence and series. </li> <li> Solve the applications on the mean value theorem </li> <li> Evaluate the improper integrals using Beta and Gamma function </li> <li> Find the extreme values of functions of two variables with/ without constrain </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b>Types of Matrices, Symmetric, Hermitian, Skew-symmetric, Skew-Hermitian, orthogonal matrices; Unitary Matrices, Rank of a matrix by Echelon form and Normal form ,Inverse of Non-singular matrices by Gauss-Jordan method . </li><br> <li> <b>Week 2 :</b> System of linear equations: Solving system of Homogeneous and Non-Homogeneous equations, Gauss elimination method, Gauss Seidel Iteration Method. </li><br> <li> <b>Week 3 :</b> Linear Transformation and Orthogonal Transformation: Eigen values and Eigen vectors ,Diagonalization of a matrix ,Cayley-Hamilton Theorem (without proof) </li><br> <li> <b>Week 4 :</b> Finding inverse and power of a matrix by Cayley-Hamilton Theorem, Quadratic forms and Nature of the Quadratic Forms, Reduction of Quadratic form to canonical forms by Orthogonal Transformation. </li><br> <li> <b>Week 5 :</b>Sequence: Definition of a sequence, Limit, Convergent, Divergent and Oscillatory sequences </li><br> <li> <b>Week 6 :</b> Series: Convergent, Divergent and Oscillatory Series, Series of positive terms, Comparison test ,p-test D-Alembert’s ratio test </li><br> <li> <b>Week 7 :</b> Raabe’s test, Cauchy’s Integral test, Cauchy’s root test, Logarithmic test, Alternating series: Leibnitz test, Alternating convergent series: Absolute and Conditionally Convergence </li><br> <li> <b>Week 8 :</b> Mean value theorems: Rolle’s theorem with Geometrical Interpretation and applications, Lagrange’s Mean value theorem with Geometrical Interpretation and applications, Cauchy’s Mean value Theorem Taylor’s Series, Applications of definite integrals to evaluate surface areas and volumes of revolutions of curves (Only in Cartesian coordinates) ,Definition of Improper Integral: Beta and Gamma functions and their applications.. </li><br> <li> <b>Week 9 :</b> Definitions of Limit and continuity ,Partial Differentiation ,Euler’s Theorem, Total derivative ,Jacobian Functional dependence & independence ,Maxima and minima of functions of two variables and three variables using method of Lagrange multipliers . </li><br> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>Dr.M V Ramana Murthy</p> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script><script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script</body></html>');
    	res.end();	
}
        
    }}
});



});
app.post("/chemenroll",function(req,res){

flag=0;
var user=req.session.passport.user;

User.findOne({username:user }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{if(docs['enrolledCourses'].length==0){  User.findOneAndUpdate(
   { username: user }, 
   { $push: {
   		enrolledCourses:req.body.coursename
   	} },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);

        res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>Chemistry</h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/chemcourse" method="POST"> <div class="form-group"> </div> <input type="hidden" id="custId" name="coursename" value="Chemistry"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to course</button> </form> </div> </nav> <div class="alert alert-success" role="alert"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Enrollment Successful</div> <div id="about"><h2>About the course</h2> <p>Introduction to Molecular structure and Theories of Bonding, Water and its treatment, Electrochemistry and corrosion, Stereochemistry, Reaction Mechanism and synthesis of drug molecules and Spectroscopic techniques and application are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> To bring adaptability to the concepts of chemistry and to acquire the required skills to become a perfect engineer. </li> <li> To impart the basic knowledge of atomic, molecular and electronic modifications which makes the student to understand the technology based on them. </li> <li> To acquire the knowledge of electrochemistry, corrosion and water treatment which are essential for the Engineers and in industry </li> <li> To acquire the skills pertaining to spectroscopy and to apply them for medical and other fields </li> <li> To impart the knowledge of stereochemistry and synthetic aspects useful for understanding reaction pathways </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> The knowledge of atomic, molecular and electronic changes, band theory related to conductivity </li> <li> The required principles and concepts of electrochemistry, corrosion and in understanding the problem of water and its treatment. </li> <li> The required skills to get clear concepts on basic spectroscopy and application to medical and other fields. </li> <li> The knowledge of configurational and conformational analysis of molecules and reaction mechanisms. </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b> Atomic and Molecular orbitals, Linear Combination of Atomic Orbitals (LCAO) ,Molecular orbitals of diatomic molecules ,Molecular orbital energy level diagrams of N2, O2 and F2 molecules. </li><br> <li> <b>Week 2 :</b> π molecular orbitals of butadiene and benzene, Crystal Field Theory (CFT): Salient Features of CFT – Crystal Field Splitting of transition metal ion d- orbitals in Tetrahedral, Octahedral and square planar geometries, Band structure of solids and effect of doping on conductance. </li><br> <li> <b>Week 3 :</b> Introduction – hardness of water – Causes of hardness, Types of hardness: temporary and permanent, Expression and units of hardness, Estimation of hardness of water by complexometric method,Portable water and its specifications. </li><br> <li> <b>Week 4 :</b>Steps involved in treatment of water, Disinfection of water by chlorination and ozonization, Boiler feed water and its treatment – Calgon conditioning, Phosphate conditioning and Colloidal conditioning , External treatment of water – Ion exchange process, Desalination of water – Reverse osmosis. </li><br> <li> <b>Week 5 :</b> Electro chemical cells- electrode potential, Standard electrode potential, Types of electrodes – calomel, Quinhydrone and glass electrode , Nernst equation Determination of pH of a solution by using quinhydrone and glass electrode, Electrochemical series and its applications, Potentiometric- titrations. </li><br> <li> <b>Week 6 :</b> Batteries – Primary (Lithium cell) and secondary batteries (Lead – acid storage battery and Lithium ion battery), Causes and effects of corrosion – theories of chemical and electrochemical corrosion – mechanism of electrochemical corrosion,Types of corrosion: Galvanic, water-line and pitting corrosion, Factors affecting rate of corrosion, Corrosion control methods- Cathodic protection – Sacrificial anode and impressed current cathodic methods, Surface coatings – metallic coatings – methods of application, Electro-less plating of Nickel. </li><br> <li> <b>Week 7 :</b>Introduction to representation of 3-dimensional structures, Structural and stereoisomers, Configurations, Symmetry and chirality, Enantiomers , Diastereomers ,Optical activity and Absolute configuration, Conformational analysis of n- butane. </li><br> <li> <b>Week 8 :</b> Substitution reactions: Nucleophilic substitution reactions: Mechanism of SN1, SN2 reactions, Electrophilic and nucleophilic addition reactions: Addition of HBr to propene, Markownikoff and anti Markownikoff’s additions, Grignard additions on carbonyl compounds, Elimination reactions: Dehydro halogenation of alkylhalides, Saytzeff rule, Oxidation reactions: Oxidation of alcohols using KMnO4 and chromic acid ,Reduction reactions: reduction of carbonyl compounds using LiAlH4 & NaBH, Hydroboration of olefins: Structure, Synthesis and pharmaceutical applications of Paracetamol and Aspirin. </li><br> <li> <b>Week 9 :</b> Spectroscopic techniques and applications: Principles of spectroscopy ,Selection rules and applications of electronic spectroscopy, Vibrational and rotational spectroscopy, Basic concepts of Nuclear magnetic resonance Spectroscopy, Chemical shift, Introduction to Magnetic resonance imaging </li> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>Dr. A S</p> </div> <div class="container mt-5"> </div> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script><script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script</body></html>');

        }
    });}
    	else{
    	for (let i = 0; i < docs['enrolledCourses'].length; i++) {
    if( req.body.coursename!=docs['enrolledCourses'][i]){
     flag=1;break;
    }
   
}

if(flag==1){
User.findOneAndUpdate(
   { username: user }, 
   { $push: {
   		enrolledCourses:req.body.coursename
   	} },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);

        res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>Chemistry</h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/chemcourse" method="POST"> <div class="form-group"> </div> <input type="hidden" id="custId" name="coursename" value="Chemistry"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to course</button> </form> </div> </nav> <div class="alert alert-success" role="alert"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Enrollment Successful</div> <div id="about"><h2>About the course</h2> <p>Introduction to Molecular structure and Theories of Bonding, Water and its treatment, Electrochemistry and corrosion, Stereochemistry, Reaction Mechanism and synthesis of drug molecules and Spectroscopic techniques and application are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> To bring adaptability to the concepts of chemistry and to acquire the required skills to become a perfect engineer. </li> <li> To impart the basic knowledge of atomic, molecular and electronic modifications which makes the student to understand the technology based on them. </li> <li> To acquire the knowledge of electrochemistry, corrosion and water treatment which are essential for the Engineers and in industry </li> <li> To acquire the skills pertaining to spectroscopy and to apply them for medical and other fields </li> <li> To impart the knowledge of stereochemistry and synthetic aspects useful for understanding reaction pathways </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> The knowledge of atomic, molecular and electronic changes, band theory related to conductivity </li> <li> The required principles and concepts of electrochemistry, corrosion and in understanding the problem of water and its treatment. </li> <li> The required skills to get clear concepts on basic spectroscopy and application to medical and other fields. </li> <li> The knowledge of configurational and conformational analysis of molecules and reaction mechanisms. </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b> Atomic and Molecular orbitals, Linear Combination of Atomic Orbitals (LCAO) ,Molecular orbitals of diatomic molecules ,Molecular orbital energy level diagrams of N2, O2 and F2 molecules. </li><br> <li> <b>Week 2 :</b> π molecular orbitals of butadiene and benzene, Crystal Field Theory (CFT): Salient Features of CFT – Crystal Field Splitting of transition metal ion d- orbitals in Tetrahedral, Octahedral and square planar geometries, Band structure of solids and effect of doping on conductance. </li><br> <li> <b>Week 3 :</b> Introduction – hardness of water – Causes of hardness, Types of hardness: temporary and permanent, Expression and units of hardness, Estimation of hardness of water by complexometric method,Portable water and its specifications. </li><br> <li> <b>Week 4 :</b>Steps involved in treatment of water, Disinfection of water by chlorination and ozonization, Boiler feed water and its treatment – Calgon conditioning, Phosphate conditioning and Colloidal conditioning , External treatment of water – Ion exchange process, Desalination of water – Reverse osmosis. </li><br> <li> <b>Week 5 :</b> Electro chemical cells- electrode potential, Standard electrode potential, Types of electrodes – calomel, Quinhydrone and glass electrode , Nernst equation Determination of pH of a solution by using quinhydrone and glass electrode, Electrochemical series and its applications, Potentiometric- titrations. </li><br> <li> <b>Week 6 :</b> Batteries – Primary (Lithium cell) and secondary batteries (Lead – acid storage battery and Lithium ion battery), Causes and effects of corrosion – theories of chemical and electrochemical corrosion – mechanism of electrochemical corrosion,Types of corrosion: Galvanic, water-line and pitting corrosion, Factors affecting rate of corrosion, Corrosion control methods- Cathodic protection – Sacrificial anode and impressed current cathodic methods, Surface coatings – metallic coatings – methods of application, Electro-less plating of Nickel. </li><br> <li> <b>Week 7 :</b>Introduction to representation of 3-dimensional structures, Structural and stereoisomers, Configurations, Symmetry and chirality, Enantiomers , Diastereomers ,Optical activity and Absolute configuration, Conformational analysis of n- butane. </li><br> <li> <b>Week 8 :</b> Substitution reactions: Nucleophilic substitution reactions: Mechanism of SN1, SN2 reactions, Electrophilic and nucleophilic addition reactions: Addition of HBr to propene, Markownikoff and anti Markownikoff’s additions, Grignard additions on carbonyl compounds, Elimination reactions: Dehydro halogenation of alkylhalides, Saytzeff rule, Oxidation reactions: Oxidation of alcohols using KMnO4 and chromic acid ,Reduction reactions: reduction of carbonyl compounds using LiAlH4 & NaBH, Hydroboration of olefins: Structure, Synthesis and pharmaceutical applications of Paracetamol and Aspirin. </li><br> <li> <b>Week 9 :</b> Spectroscopic techniques and applications: Principles of spectroscopy ,Selection rules and applications of electronic spectroscopy, Vibrational and rotational spectroscopy, Basic concepts of Nuclear magnetic resonance Spectroscopy, Chemical shift, Introduction to Magnetic resonance imaging </li> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>Dr. A S</p> </div> <div class="container mt-5"> </div> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script><script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script</body></html>');
            
        }
    });
}
else{
    	console.log("Already Registered");
        res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>Chemistry</h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/chemcourse" method="POST"> <div class="form-group"> </div> <input type="hidden" id="custId" name="coursename" value="Chemistry"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to course</button> </form> </div> </nav> <div role="alert" class="alert alert-danger"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Already Enrolled</div> <div id="about"><h2>About the course</h2> <p>Introduction to Molecular structure and Theories of Bonding, Water and its treatment, Electrochemistry and corrosion, Stereochemistry, Reaction Mechanism and synthesis of drug molecules and Spectroscopic techniques and application are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> To bring adaptability to the concepts of chemistry and to acquire the required skills to become a perfect engineer. </li> <li> To impart the basic knowledge of atomic, molecular and electronic modifications which makes the student to understand the technology based on them. </li> <li> To acquire the knowledge of electrochemistry, corrosion and water treatment which are essential for the Engineers and in industry </li> <li> To acquire the skills pertaining to spectroscopy and to apply them for medical and other fields </li> <li> To impart the knowledge of stereochemistry and synthetic aspects useful for understanding reaction pathways </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> The knowledge of atomic, molecular and electronic changes, band theory related to conductivity </li> <li> The required principles and concepts of electrochemistry, corrosion and in understanding the problem of water and its treatment. </li> <li> The required skills to get clear concepts on basic spectroscopy and application to medical and other fields. </li> <li> The knowledge of configurational and conformational analysis of molecules and reaction mechanisms. </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b> Atomic and Molecular orbitals, Linear Combination of Atomic Orbitals (LCAO) ,Molecular orbitals of diatomic molecules ,Molecular orbital energy level diagrams of N2, O2 and F2 molecules. </li><br> <li> <b>Week 2 :</b> π molecular orbitals of butadiene and benzene, Crystal Field Theory (CFT): Salient Features of CFT – Crystal Field Splitting of transition metal ion d- orbitals in Tetrahedral, Octahedral and square planar geometries, Band structure of solids and effect of doping on conductance. </li><br> <li> <b>Week 3 :</b> Introduction – hardness of water – Causes of hardness, Types of hardness: temporary and permanent, Expression and units of hardness, Estimation of hardness of water by complexometric method,Portable water and its specifications. </li><br> <li> <b>Week 4 :</b>Steps involved in treatment of water, Disinfection of water by chlorination and ozonization, Boiler feed water and its treatment – Calgon conditioning, Phosphate conditioning and Colloidal conditioning , External treatment of water – Ion exchange process, Desalination of water – Reverse osmosis. </li><br> <li> <b>Week 5 :</b> Electro chemical cells- electrode potential, Standard electrode potential, Types of electrodes – calomel, Quinhydrone and glass electrode , Nernst equation Determination of pH of a solution by using quinhydrone and glass electrode, Electrochemical series and its applications, Potentiometric- titrations. </li><br> <li> <b>Week 6 :</b> Batteries – Primary (Lithium cell) and secondary batteries (Lead – acid storage battery and Lithium ion battery), Causes and effects of corrosion – theories of chemical and electrochemical corrosion – mechanism of electrochemical corrosion,Types of corrosion: Galvanic, water-line and pitting corrosion, Factors affecting rate of corrosion, Corrosion control methods- Cathodic protection – Sacrificial anode and impressed current cathodic methods, Surface coatings – metallic coatings – methods of application, Electro-less plating of Nickel. </li><br> <li> <b>Week 7 :</b>Introduction to representation of 3-dimensional structures, Structural and stereoisomers, Configurations, Symmetry and chirality, Enantiomers , Diastereomers ,Optical activity and Absolute configuration, Conformational analysis of n- butane. </li><br> <li> <b>Week 8 :</b> Substitution reactions: Nucleophilic substitution reactions: Mechanism of SN1, SN2 reactions, Electrophilic and nucleophilic addition reactions: Addition of HBr to propene, Markownikoff and anti Markownikoff’s additions, Grignard additions on carbonyl compounds, Elimination reactions: Dehydro halogenation of alkylhalides, Saytzeff rule, Oxidation reactions: Oxidation of alcohols using KMnO4 and chromic acid ,Reduction reactions: reduction of carbonyl compounds using LiAlH4 & NaBH, Hydroboration of olefins: Structure, Synthesis and pharmaceutical applications of Paracetamol and Aspirin. </li><br> <li> <b>Week 9 :</b> Spectroscopic techniques and applications: Principles of spectroscopy ,Selection rules and applications of electronic spectroscopy, Vibrational and rotational spectroscopy, Basic concepts of Nuclear magnetic resonance Spectroscopy, Chemical shift, Introduction to Magnetic resonance imaging </li> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>Dr. A S</p> </div> <div class="container mt-5"> </div> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script><script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script</body></html>');
        res.end();	
}
        
    }}
});


});

app.post("/beeenroll",function(req,res){

flag=0;
var user=req.session.passport.user;

User.findOne({username:user }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{if(docs['enrolledCourses'].length==0){  User.findOneAndUpdate(
   { username: user }, 
   { $push: {
   		enrolledCourses:req.body.coursename
   	} },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);
            res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>BEE</h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/beecourse" method="POST"> <div class="form-group"> </div> <input type="hidden" id="custId" name="coursename" value="BEE"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to course</button> </form> </div> </nav> <div class="alert alert-success" role="alert"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Enrollment Successful</div> <div id="about"><h2>About the course</h2> <p>Introduction to D.C. Circui, A.C. Circuits, Transformers,Electrical Machines and Electrical Installations are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> To introduce the concepts of electrical circuits and its components</li> <li> To understand magnetic circuits, DC circuits and AC single phase & three phase circuit </li> <li> To study and understand the different types of DC/AC machines and Transformers. </li> <li> To import the knowledge of various electrical installations </li> <li> To introduce the concept of power, power factor and its improvement </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> To analyze and solve electrical circuits using network laws and theorem </li> <li> To understand and analyze basic Electric and Magnetic circuits. </li> <li> To study the working principles of Electrical Machines </li> <li> To introduce components of Low Voltage Electrical Installations </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b> D.C. Circuits Electrical circuit elements (R, L and C) , Voltage and current sources, KVL&KCL </li><br> <li> <b>Week 2 :</b> Analysis of simple circuits with dc excitation, Superposition , Thevenin and Norton Theorems , Time-domain analysis of first-order RL and RC circuits . </li><br> <li> <b>Week 3 :</b>A.C. Circuits Representation of sinusoidal waveforms, Peak and rms values, Phasor representation,( Real power, Reactive power, Apparent power, Power factor) . </li><br> <li> <b>Week 4 :</b>Analysis of single-phase ac circuits consisting of R, L, C, RL, RC, RLC combinations (series and parallel), Resonance in series RL-C circuit, Three-phase balanced circuits, Voltage and current relations in star and delta connections. <li> <b>Week 5 :</b> Transformers Ideal and practical transformer, Equivalent circuit, Losses in transformers, Regulation and efficiency, Auto-transformer and three-phase transformer connections . </li><br> <li> <b>Week 6 :</b> Electrical Machines Generation of rotating magnetic fields, Construction and working of a three-phase induction motor, Significance of torque-slip characteristic, Loss components and efficiency. </li><br> <li> <b>Week 7 :</b>Starting and speed control of induction motor, Single-phase induction motor: Construction, working, Torque-speed characteristic and speed control of separately excited dc motor, Construction and working of synchronous generators. <li> <b>Week 8 :</b>Electrical Installations Components of LT Switchgear: Switch Fuse Unit (SFU), MCB, ELCB, MCCB, Types of Wires and Cables, Earthing ,Types of Batteries, Important Characteristics for Batteries, Elementary calculations for energy consumption, power factor improvement and battery backup. </li><br> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>C V K</p> </div> <div class="container mt-5"> </div> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script><script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script</body></html>');
        }
    });}
    	else{
    	for (let i = 0; i < docs['enrolledCourses'].length; i++) {
    if( req.body.coursename!=docs['enrolledCourses'][i]){
     flag=1;break;
    }
   
}

if(flag==1){
User.findOneAndUpdate(
   { username: user }, 
   { $push: {
   		enrolledCourses:req.body.coursename
   	} },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);
            res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>BEE</h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/beecourse" method="POST"> <div class="form-group"> </div> <input type="hidden" id="custId" name="coursename" value="BEE"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to course</button> </form> </div> </nav> <div class="alert alert-success" role="alert"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Enrollment Successful</div> <div id="about"><h2>About the course</h2> <p>Introduction to D.C. Circui, A.C. Circuits, Transformers,Electrical Machines and Electrical Installations are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> To introduce the concepts of electrical circuits and its components</li> <li> To understand magnetic circuits, DC circuits and AC single phase & three phase circuit </li> <li> To study and understand the different types of DC/AC machines and Transformers. </li> <li> To import the knowledge of various electrical installations </li> <li> To introduce the concept of power, power factor and its improvement </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> To analyze and solve electrical circuits using network laws and theorem </li> <li> To understand and analyze basic Electric and Magnetic circuits. </li> <li> To study the working principles of Electrical Machines </li> <li> To introduce components of Low Voltage Electrical Installations </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b> D.C. Circuits Electrical circuit elements (R, L and C) , Voltage and current sources, KVL&KCL </li><br> <li> <b>Week 2 :</b> Analysis of simple circuits with dc excitation, Superposition , Thevenin and Norton Theorems , Time-domain analysis of first-order RL and RC circuits . </li><br> <li> <b>Week 3 :</b>A.C. Circuits Representation of sinusoidal waveforms, Peak and rms values, Phasor representation,( Real power, Reactive power, Apparent power, Power factor) . </li><br> <li> <b>Week 4 :</b>Analysis of single-phase ac circuits consisting of R, L, C, RL, RC, RLC combinations (series and parallel), Resonance in series RL-C circuit, Three-phase balanced circuits, Voltage and current relations in star and delta connections. <li> <b>Week 5 :</b> Transformers Ideal and practical transformer, Equivalent circuit, Losses in transformers, Regulation and efficiency, Auto-transformer and three-phase transformer connections . </li><br> <li> <b>Week 6 :</b> Electrical Machines Generation of rotating magnetic fields, Construction and working of a three-phase induction motor, Significance of torque-slip characteristic, Loss components and efficiency. </li><br> <li> <b>Week 7 :</b>Starting and speed control of induction motor, Single-phase induction motor: Construction, working, Torque-speed characteristic and speed control of separately excited dc motor, Construction and working of synchronous generators. <li> <b>Week 8 :</b>Electrical Installations Components of LT Switchgear: Switch Fuse Unit (SFU), MCB, ELCB, MCCB, Types of Wires and Cables, Earthing ,Types of Batteries, Important Characteristics for Batteries, Elementary calculations for energy consumption, power factor improvement and battery backup. </li><br> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>C V K</p> </div> <div class="container mt-5"> </div> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script><script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script</body></html>');

            
        }
    });
}
else{
    	console.log("Already Registered");
        res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>BEE</h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/beecourse" method="POST"> <div class="form-group"> </div> <input type="hidden" id="custId" name="coursename" value="BEE"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to course</button> </form> </div> </nav> <div role="alert" class="alert alert-danger"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Already Enrolled</div> <div id="about"><h2>About the course</h2> <p>Introduction to D.C. Circui, A.C. Circuits, Transformers,Electrical Machines and Electrical Installations are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> To introduce the concepts of electrical circuits and its components</li> <li> To understand magnetic circuits, DC circuits and AC single phase & three phase circuit </li> <li> To study and understand the different types of DC/AC machines and Transformers. </li> <li> To import the knowledge of various electrical installations </li> <li> To introduce the concept of power, power factor and its improvement </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> To analyze and solve electrical circuits using network laws and theorem </li> <li> To understand and analyze basic Electric and Magnetic circuits. </li> <li> To study the working principles of Electrical Machines </li> <li> To introduce components of Low Voltage Electrical Installations </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b> D.C. Circuits Electrical circuit elements (R, L and C) , Voltage and current sources, KVL&KCL </li><br> <li> <b>Week 2 :</b> Analysis of simple circuits with dc excitation, Superposition , Thevenin and Norton Theorems , Time-domain analysis of first-order RL and RC circuits . </li><br> <li> <b>Week 3 :</b>A.C. Circuits Representation of sinusoidal waveforms, Peak and rms values, Phasor representation,( Real power, Reactive power, Apparent power, Power factor) . </li><br> <li> <b>Week 4 :</b>Analysis of single-phase ac circuits consisting of R, L, C, RL, RC, RLC combinations (series and parallel), Resonance in series RL-C circuit, Three-phase balanced circuits, Voltage and current relations in star and delta connections. <li> <b>Week 5 :</b> Transformers Ideal and practical transformer, Equivalent circuit, Losses in transformers, Regulation and efficiency, Auto-transformer and three-phase transformer connections . </li><br> <li> <b>Week 6 :</b> Electrical Machines Generation of rotating magnetic fields, Construction and working of a three-phase induction motor, Significance of torque-slip characteristic, Loss components and efficiency. </li><br> <li> <b>Week 7 :</b>Starting and speed control of induction motor, Single-phase induction motor: Construction, working, Torque-speed characteristic and speed control of separately excited dc motor, Construction and working of synchronous generators. <li> <b>Week 8 :</b>Electrical Installations Components of LT Switchgear: Switch Fuse Unit (SFU), MCB, ELCB, MCCB, Types of Wires and Cables, Earthing ,Types of Batteries, Important Characteristics for Batteries, Elementary calculations for energy consumption, power factor improvement and battery backup. </li><br> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>C V K</p> </div> <div class="container mt-5"> </div> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script><script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script</body></html>');
    	res.end();	
}
        
    }}
});


});
app.post("/engenroll",function(req,res){

flag=0;
var user=req.session.passport.user;

User.findOne({username:user }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{if(docs['enrolledCourses'].length==0){  User.findOneAndUpdate(
   { username: user }, 
   { $push: {
   		enrolledCourses:req.body.coursename
   	} },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);

            res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>English</h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/engcourse" method="POST"> <div class="form-group"> </div> <input type="hidden" id="custId" name="coursename" value="English"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to course</button> </form> </div> </nav> <div class="alert alert-success" role="alert"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Enrollment Successful</div> <div id="about"><h2>About the course</h2> <p>Introduction to ‘The Raman Effect’ from the prescribed textbook ‘English for Engineers’ published byCambridge University Press, ‘Ancient Architecture in India’ from the prescribed textbook ‘English for Engineers’ publishedby Cambridge University Press,Blue Jeans’ from the prescribed textbook ‘English for Engineers’ published by CambridgeUniversity Press,‘What Should You Be Eating’ from the prescribed textbook ‘English for Engineers’ published byCambridge University Press and ‘How a Chinese Billionaire Built Her Fortune’ from the prescribed textbook ‘English forEngineers’ published by Cambridge University Press are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> Improve the language proficiency of students in English with an emphasis on Vocabulary, Grammar, Reading and Writing skills </li> <li> Equip students to study academic subjects more effectively and critically using the theoretical and practical components of English syllabus <li> Develop study skills and communication skills in formal and informal situations. </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> Use English Language effectively in spoken and written form </li> <li> Comprehend the given texts and respond appropriately </li> <li> Communicate confidently in various contexts and different cultures </li> <li> Acquire basic proficiency in English including reading and listening comprehension, writing and speaking skills </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b> ‘The Raman Effect’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary Building: The Concept of Word Formation --The Use of Prefixes and Suffixes, Grammar: Identifying Common Errors in Writing with Reference to Articles and Prepositions. </li><br> <li> <b>Week 2 :</b>Reading: Reading and Its Importance- Techniques for Effective Reading. Basic Writing Skills: Sentence Structures -Use of Phrases and Clauses in SentencesImportance of Proper Punctuation- Techniques for writing precisely, Paragraph writing – Types, Structures and Features of a Paragraph - Creating Coherence-Organizing Principles of Paragraphs in Documents. </li><br> <li> <b>Week 3 :</b> ‘Ancient Architecture in India’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary: Synonyms and Antonyms, Grammar: Identifying Common Errors in Writing with Reference to Noun-pronoun Agreement and Subject-verb Agreement, Reading: Improving Comprehension Skills – Techniques for Good Comprehension , Writing: Format of a Formal Letter-Writing Formal Letters E.g.., Letter of Complaint, Letter of Requisition, Job Application with Resume. </li><br> <li> <b>Week 4 :</b> ‘Blue Jeans’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary: Acquaintance with Prefixes and Suffixes from Foreign Languages in English to form Derivatives-Words from Foreign Languages and their Use in English, Grammar: Identifying Common Errors in Writing with Reference to Misplaced Modifiers and Tenses. </li><br> <li> <b>Week 5 :</b> Reading: Sub-skills of Reading- Skimming and Scanning, Writing: Nature and Style of Sensible Writing- Defining- Describing Objects, Places and Events – Classifying- Providing Examples or Evidence. </li><br> <li> <b>Week 6 :</b> ‘What Should You Be Eating’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary: Standard Abbreviations in English, Grammar: Redundancies and Clichés in Oral and Written Communication, Reading: Comprehension- Intensive Reading and Extensive Reading ,Writing: Writing Practices--Writing Introduction and Conclusion - Essay Writing-Précis Writing. </li><br> <li> <b>Week 7 :</b>‘How a Chinese Billionaire Built Her Fortune’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary: Technical Vocabulary and their usage </li><br> <li> <b>Week 8 :</b>Grammar: Common Errors in English, Reading: Reading Comprehension-Exercises for Practice Writing: Technical Reports- Introduction – Characteristics of a Report – Categories of Reports Formats- Structure of Reports (Manuscript Format) -Types of Reports - Writing a Report. </li><br> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>Dr. V A R</p> </div> <div class="container mt-5"> </div> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script><script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script</body></html>');

        }
    });}
    	else{
    	for (let i = 0; i < docs['enrolledCourses'].length; i++) {
    if( req.body.coursename!=docs['enrolledCourses'][i]){
     flag=1;break;
    }
   
}

if(flag==1){
User.findOneAndUpdate(
   { username: user }, 
   { $push: {
   		enrolledCourses:req.body.coursename
   	} },
  function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log(success);

            res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>English</h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/engcourse" method="POST"> <div class="form-group"> </div> <input type="hidden" id="custId" name="coursename" value="English"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to course</button> </form> </div> </nav> <div class="alert alert-success" role="alert"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Enrollment Successful</div> <div id="about"><h2>About the course</h2> <p>Introduction to ‘The Raman Effect’ from the prescribed textbook ‘English for Engineers’ published byCambridge University Press, ‘Ancient Architecture in India’ from the prescribed textbook ‘English for Engineers’ publishedby Cambridge University Press,Blue Jeans’ from the prescribed textbook ‘English for Engineers’ published by CambridgeUniversity Press,‘What Should You Be Eating’ from the prescribed textbook ‘English for Engineers’ published byCambridge University Press and ‘How a Chinese Billionaire Built Her Fortune’ from the prescribed textbook ‘English forEngineers’ published by Cambridge University Press are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> Improve the language proficiency of students in English with an emphasis on Vocabulary, Grammar, Reading and Writing skills </li> <li> Equip students to study academic subjects more effectively and critically using the theoretical and practical components of English syllabus <li> Develop study skills and communication skills in formal and informal situations. </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> Use English Language effectively in spoken and written form </li> <li> Comprehend the given texts and respond appropriately </li> <li> Communicate confidently in various contexts and different cultures </li> <li> Acquire basic proficiency in English including reading and listening comprehension, writing and speaking skills </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b> ‘The Raman Effect’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary Building: The Concept of Word Formation --The Use of Prefixes and Suffixes, Grammar: Identifying Common Errors in Writing with Reference to Articles and Prepositions. </li><br> <li> <b>Week 2 :</b>Reading: Reading and Its Importance- Techniques for Effective Reading. Basic Writing Skills: Sentence Structures -Use of Phrases and Clauses in SentencesImportance of Proper Punctuation- Techniques for writing precisely, Paragraph writing – Types, Structures and Features of a Paragraph - Creating Coherence-Organizing Principles of Paragraphs in Documents. </li><br> <li> <b>Week 3 :</b> ‘Ancient Architecture in India’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary: Synonyms and Antonyms, Grammar: Identifying Common Errors in Writing with Reference to Noun-pronoun Agreement and Subject-verb Agreement, Reading: Improving Comprehension Skills – Techniques for Good Comprehension , Writing: Format of a Formal Letter-Writing Formal Letters E.g.., Letter of Complaint, Letter of Requisition, Job Application with Resume. </li><br> <li> <b>Week 4 :</b> ‘Blue Jeans’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary: Acquaintance with Prefixes and Suffixes from Foreign Languages in English to form Derivatives-Words from Foreign Languages and their Use in English, Grammar: Identifying Common Errors in Writing with Reference to Misplaced Modifiers and Tenses. </li><br> <li> <b>Week 5 :</b> Reading: Sub-skills of Reading- Skimming and Scanning, Writing: Nature and Style of Sensible Writing- Defining- Describing Objects, Places and Events – Classifying- Providing Examples or Evidence. </li><br> <li> <b>Week 6 :</b> ‘What Should You Be Eating’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary: Standard Abbreviations in English, Grammar: Redundancies and Clichés in Oral and Written Communication, Reading: Comprehension- Intensive Reading and Extensive Reading ,Writing: Writing Practices--Writing Introduction and Conclusion - Essay Writing-Précis Writing. </li><br> <li> <b>Week 7 :</b>‘How a Chinese Billionaire Built Her Fortune’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary: Technical Vocabulary and their usage </li><br> <li> <b>Week 8 :</b>Grammar: Common Errors in English, Reading: Reading Comprehension-Exercises for Practice Writing: Technical Reports- Introduction – Characteristics of a Report – Categories of Reports Formats- Structure of Reports (Manuscript Format) -Types of Reports - Writing a Report. </li><br> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>Dr. V A R</p> </div> <div class="container mt-5"> </div> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script><script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script</body></html>');
            
        }
    });
}
else{
    	console.log("Already Registered");
        res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/sidemenustyles.css"><style type="text/css">.navi{ height: 100px;}.homenav a{text-decoration: none;color: black;}.homenav a:hover{background-color: #846bfb;color: black; border-radius: 40px;}.profile:hover { background-color: #846bfb;border-radius: 40px;}.profile{ border-style: none;background-color: #fff;color:black;margin-top: 7px;padding: 2px;}</style></head><body><head> <link href="https://fonts.googleapis.com/css?family=Open+Sans:300i,400" rel="stylesheet"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navi"> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 1000px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div> <div class="wrapper"> <!-- Sidebar Holder --> <nav id="sidebar"> <div class="sidebar-header"> <h3>Course Navigation</h3> </div> <ul class="list-unstyled components"> <li> <a href="#about" >About the course</a> </li> <li> <a href="#obj">Course Objectives</a> </li> <li> <a href="#out">Course Outcomes</a> <li> <a href="#line" >Course Outine</a> </li> <li> <a href="#ins">Instructors</a> </li> </ul> </nav> <!-- Page Content Holder --> <div id="content"> <nav class="navbar navbar-expand-lg navbar-light bg-light"> <div class="container-fluid"> <button type="button" id="sidebarCollapse" class="navbar-btn"> <span></span> <span></span> <span></span> </button> <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-align-justify"></i> </button> <h2>English</h2> <div class="collapse navbar-collapse" id="navbarSupportedContent"> </div> <form action="/engcourse" method="POST"> <div class="form-group"> </div> <input type="hidden" id="custId" name="coursename" value="English"> <button type="submit" class="btn" style="background-color: #6d7fcc;color: #fff;margin-left: 700px;">Go to course</button> </form> </div> </nav> <div role="alert" class="alert alert-danger"> <strong><i class="fas fa-info-circle"></i> Note: </strong> Already Enrolled</div> <div id="about"><h2>About the course</h2> <p>Introduction to ‘The Raman Effect’ from the prescribed textbook ‘English for Engineers’ published byCambridge University Press, ‘Ancient Architecture in India’ from the prescribed textbook ‘English for Engineers’ publishedby Cambridge University Press,Blue Jeans’ from the prescribed textbook ‘English for Engineers’ published by CambridgeUniversity Press,‘What Should You Be Eating’ from the prescribed textbook ‘English for Engineers’ published byCambridge University Press and ‘How a Chinese Billionaire Built Her Fortune’ from the prescribed textbook ‘English forEngineers’ published by Cambridge University Press are all covered in this course. </p></div><br> <div id="obj"> <h2>Course Objectives</h2><br> <ul> <li> Improve the language proficiency of students in English with an emphasis on Vocabulary, Grammar, Reading and Writing skills </li> <li> Equip students to study academic subjects more effectively and critically using the theoretical and practical components of English syllabus <li> Develop study skills and communication skills in formal and informal situations. </li> </ul> </div> <br> <div id="out"> <h2>Course Outcomes: The student will learn</h2><br> <ul> <li> Use English Language effectively in spoken and written form </li> <li> Comprehend the given texts and respond appropriately </li> <li> Communicate confidently in various contexts and different cultures </li> <li> Acquire basic proficiency in English including reading and listening comprehension, writing and speaking skills </li> </ul> <br> </div> <div id="line"> <h2>Course Outine</h2> <ul> <li> <b>Week 1 :</b> ‘The Raman Effect’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary Building: The Concept of Word Formation --The Use of Prefixes and Suffixes, Grammar: Identifying Common Errors in Writing with Reference to Articles and Prepositions. </li><br> <li> <b>Week 2 :</b>Reading: Reading and Its Importance- Techniques for Effective Reading. Basic Writing Skills: Sentence Structures -Use of Phrases and Clauses in SentencesImportance of Proper Punctuation- Techniques for writing precisely, Paragraph writing – Types, Structures and Features of a Paragraph - Creating Coherence-Organizing Principles of Paragraphs in Documents. </li><br> <li> <b>Week 3 :</b> ‘Ancient Architecture in India’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary: Synonyms and Antonyms, Grammar: Identifying Common Errors in Writing with Reference to Noun-pronoun Agreement and Subject-verb Agreement, Reading: Improving Comprehension Skills – Techniques for Good Comprehension , Writing: Format of a Formal Letter-Writing Formal Letters E.g.., Letter of Complaint, Letter of Requisition, Job Application with Resume. </li><br> <li> <b>Week 4 :</b> ‘Blue Jeans’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary: Acquaintance with Prefixes and Suffixes from Foreign Languages in English to form Derivatives-Words from Foreign Languages and their Use in English, Grammar: Identifying Common Errors in Writing with Reference to Misplaced Modifiers and Tenses. </li><br> <li> <b>Week 5 :</b> Reading: Sub-skills of Reading- Skimming and Scanning, Writing: Nature and Style of Sensible Writing- Defining- Describing Objects, Places and Events – Classifying- Providing Examples or Evidence. </li><br> <li> <b>Week 6 :</b> ‘What Should You Be Eating’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary: Standard Abbreviations in English, Grammar: Redundancies and Clichés in Oral and Written Communication, Reading: Comprehension- Intensive Reading and Extensive Reading ,Writing: Writing Practices--Writing Introduction and Conclusion - Essay Writing-Précis Writing. </li><br> <li> <b>Week 7 :</b>‘How a Chinese Billionaire Built Her Fortune’ from the prescribed textbook ‘English for Engineers’ published by Cambridge University Press, Vocabulary: Technical Vocabulary and their usage </li><br> <li> <b>Week 8 :</b>Grammar: Common Errors in English, Reading: Reading Comprehension-Exercises for Practice Writing: Technical Reports- Introduction – Characteristics of a Report – Categories of Reports Formats- Structure of Reports (Manuscript Format) -Types of Reports - Writing a Report. </li><br> </ul> </div> <div id="ins"> <h2>Instructors</h2> <p>Dr. V A R</p> </div> <div class="container mt-5"> </div> </div> <!-- jQuery CDN - Slim version (=without AJAX) --> <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script> <!-- Popper.JS --> <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script> <!-- Bootstrap JS --> <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script><script type="text/javascript"> $(document).ready(function () { $("#sidebarCollapse").on("click", function () { $("#sidebar").toggleClass("active"); $(this).toggleClass("active"); }); }); </script</body></html>');
    	res.end();	
}
        
    }}
});


});
app.post("/register",function(req,res){
var uname = req.body.username;
var regx = /[a-zA-Z0-9_\.@]+mgit.ac.in/;
if(regx.test(uname)){
useremail=uname;
num=Math.floor(100000 + Math.random() * 900000);
const options ={
from:"dtesting016@outlook.com",
to:req.body.username,
subject:"Testing mail",
text:"OTP is "+ num
};

transporter.sendMail(options,function(err,info){
if(err){
	console.log(err);return;
}
else {
console.log("Sent info"+info.response);
res.redirect("/verify");
}	
});
}
else{
	res.render("errorregister");
}
});

app.post("/verify",function(req, res){
if((useremail==req.body.username)&&(parseInt(num)==req.body.otp)){
User.register({username:req.body.username},req.body.password,function(err,user){
if(err){
	console.log(err);
	res.redirect("/register");
}
else{
passport.authenticate("local")(req,res,function(){
res.render("successregister");
});
}
});
}
else {
	res.render("errorregister");
}
});

app.post("/profile",function(req, res){
User.findOne({username: req.session.passport.user}, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        
        res.write('<!DOCTYPE html><html lang="en"><head><title>Mgitwebedu</title><link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" /> <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><link rel="stylesheet" href="css/styles.css"></head><body> <div class="header"> <nav class="navbar navbar-expand-lg navbar-light "> <div class="container-fluid homediv"> <img src="images/mw.png" style="width: 110px; height: 80px; margin-right: 10px;margin-top: 15px;"> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse homenav" id="navbarSupportedContent"> <ul class="navbar-nav me-auto mb-2 mb-lg-0"> <li class="nav-item" style="margin-left: 100px;"> <a class="nav-link active" aria-current="page" href="/" >Home</a> </li> <li class="nav-item"> <a class="nav-link active" aria-current="page" href="/enrolledcourses" >My Courses</a> </li> <li class="nav-item" > <form action="/profile" method="post"><button class="profile" style="font-weight: 400;margin-top:7px;">Profile</button></form> </li> <li class="nav-item" > <a class="nav-link active " aria-current="page" href="/logout">Logout</a> </li> </ul> </div> </div></nav></div>');   	
    	res.write(' <div style="position:absolute;top:120px;left:20px">Registered Email : '+req.session.passport.user+'</div>');

    	res.write('<style> .card { display: inline-block; align-items: center; justify-content: center; flex-direction: column; background-color: #ffffff; margin: 100px 20px; width: 280px; height: 350px; border-radius: 5px; box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.2);}.card .percent { position: relative;}.card svg { position: absolute; width: 210px; height: 210px; transform: rotate(-90deg); margin-left:30px;margin-top:30px;}.card svg circle { width: 100%; height: 100%; fill: none; stroke: #f0f0f0; stroke-width: 10; stroke-linecap: round;}.card svg circle:last-of-type { stroke-dasharray: 625px; stroke-dashoffset: calc(625px - (625px * var(--percent)) / 100); stroke: #6d7fcc; }.card .number { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}.card .number h3 { font-weight: 200; font-size: 3.5rem;position:relative;margin-top:270px;}.card .number h3 span { font-size: 2rem;}.card .title h2 { margin: 25px 0 0;color:#000;position:absolute;top:270px;left:100px}.card:nth-child(1) svg circle:last-of-type { stroke: #f39c12;}.card:nth-child(2) svg circle:last-of-type { stroke: #2ecc71;}</style>');
    	if(docs['clang']==1){
        res.write('<div class="card"> <div class="percent"> <svg> <circle cx="105" cy="105" r="100"></circle> <circle cx="105" cy="105" r="100" style="--percent: 100"></circle> </svg> <div class="number"> <h3>100<span>%</span></h3> </div> </div> <div class="title"> <h2>PPS</h2> </div></div>');
    	}
        else{
        res.write('<div class="card"> <div class="percent"> <svg> <circle cx="105" cy="105" r="100"></circle> <circle cx="105" cy="105" r="100" style="--percent: 0"></circle> </svg> <div class="number"> <h3>0<span>%</span></h3> </div> </div> <div class="title"> <h2>PPS</h2> </div></div>');

        }
        if(docs['m1']==1){
        res.write('<div class="card"> <div class="percent"> <svg> <circle cx="105" cy="105" r="100"></circle> <circle cx="105" cy="105" r="100" style="--percent: 100"></circle> </svg> <div class="number"> <h3>100<span>%</span></h3> </div> </div> <div class="title"> <h2>M 1</h2> </div></div>');
    	
    	}
        else{
        res.write('<div class="card"> <div class="percent"> <svg> <circle cx="105" cy="105" r="100"></circle> <circle cx="105" cy="105" r="100" style="--percent: 0"></circle> </svg> <div class="number"> <h3>0<span>%</span></h3> </div> </div> <div class="title"> <h2>M 1</h2> </div></div>');

        }
        res.write('</body></html>');
        res.end();
        }
});
});
app.post("/login", passport.authenticate("local"), function(req, res){
	res.redirect("/courses");
});


app.get("/logout",function(req,res){
	req.logout();
	res.redirect("/");
});



app.listen(3000,function(){
	console.log("Server started on port 3000");
});