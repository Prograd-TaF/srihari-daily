var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongodb=require('mongodb');
var mongoClient=mongodb.MongoClient;
let dburl='mongodb+srv://srihari:Srihari@cluster0.mdwq6.mongodb.net/db5?retryWrites=true&w=majority';
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/login',(req,res)=>{
  res.render('login');
})
app.get('/home',(req,res)=>{
  res.render('index',{"a":"a"});
})
app.get('/signup',(req,res)=>{
  res.render('signup');
})
app.post('/userfeedback',async(req,res)=>{
  const client=await mongoClient.connect(dburl);
  obj={};
  obj["name"]=req.body.name;
  obj["email"]=req.body.email;
  obj["feedback"]=req.body.feedback;
    try{
        let db=await client.db('db5');
        let user=await db.collection('feedback').insertOne(obj);
        res.render('index',{"a":"b"});
    }
    catch(err){
      console.log(err);
    }
    finally{
        client.close()
    }
  console.log(obj);
  
})
app.get('/admin',async(req,res)=>{
    const client=await mongoClient.connect(dburl);
    try{
        let db=await client.db('db5');
        let user=await db.collection('feedback').find({}).toArray();
        console.log(user);
        /*res.json({
            message:'data sent',
            user
        })*/
        res.render('admin',{info:user});
    }
    catch(err){
      console.log(err);
    }
    finally{
        client.close()
    }
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
