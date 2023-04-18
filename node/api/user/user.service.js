const con = require('../../config/database')

module.exports={
    get:callback=>{
        con.query("Select * from user",
        [],
        (err,result,field)=>{
            if(err){
                return callback(err);
            }
            console.log("This is result ",result);
            return callback(null,result);
        }
        );
    },
    post:(data,callback)=>{
        // console.log("This is data"+data);
        con.query("INSERT INTO USER VALUES(?,?,?,?)",
        [data.Name,
        data.Email,
        data.Password,
        data.OrganizationName
    ],
    (error,result,field)=>{
        if(error){
            return error;
        }
        return callback(null,result);
    }
        )
    },
    
    login:(data,cb) => {
        con.query('Select * from user where email=?',[data.Email], (err,results) => {
            if(err) {
                return err;
            }
            // console.log(results)
            if(results.length > 0){
                if(results[0].Password === data.Password) {
                     cb(null, {isSuccess: true})
                    return
                }else{
                    cb(null, {isSuccess: false, message: 'Password did not match'})
                    return
                }

            }
            cb(null, {isSuccess: 'false', message: 'Email did not match'})
        })

        return 
    }
}