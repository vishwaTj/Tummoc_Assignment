const User = require ('../models/User');

module.exports.CreateUser = function(req,res){
    console.log(req.body);
    // User.create({
    //     name:req.body.name,
    //     mail:req.body.mail,
    //     password:req.body.password
    // })
    res.json({success:true});
}

module.exports.Basic = function(req,res){
    res.json({success:true});
}
