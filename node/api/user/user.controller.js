const {get,post} = require('./user.service')
const {json} =  require("body-parser");
module.exports=
{
    getUsers:(req,res)=>{
        get((err,results)=>{
            if(err){
                console.log("This is error",err);
                return;
            }
            console.log(results)
            return res.render('user', {
                users: results
            })

        }); 
    },
    register:(req,res)=>{
        console.log(req.body)
        const body = req.body;
        post(body,(err,result)=>{
            if(err){
                console.log(err)
            }
            console.log(result)
            if(result.affectedRows)
                return res.render('user', {users: [req.body]})
            // console.log('error creating user')
        });
    },

    login: (req,res) => {
        const body = req.body
        console.log(body)
        login(body, (err,results) => {
            if(err){
                console.log(err)
                res.render('404')
            }
            if(results.isSuccess)
                return res.render('user')
            if(!results.isSuccess){
                return res.render('login',{message: results.message})
            }
        })
    }
}