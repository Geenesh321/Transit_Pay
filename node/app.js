const express = require("express");
const expressHbs = require('express-handlebars');
const path = require('path')

const userService = require("./api/user/user.service");
const app = express();
const userRouter = require('./api/user/user.router');
const port = 4000;

const database = require('./config/database')

app.engine('hbs', expressHbs.engine({layoutsDir: `${__dirname}/views/layouts/`, defaultLayout: 'main-layout', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, '/public')));


// app.use()

app.get('/login', (resq,res) => {
    res.render('login')
})

// app.get('/', (req,res) => {
//     return res.render('login')
// })
app.get('/firstpage', (req,res) => {
    res.render('Firstpage')
})

// console.log(userRouter);
app.use("/", userRouter)



app.listen(port,()=>{
    console.log(`Application running on port ${port}`)
})