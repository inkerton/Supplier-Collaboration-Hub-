const { User } = require("../model/User");


exports.createUser = async (req, res)=> {
    const {id} = req.params;
    try {
        const user = await User.findByIdAndUpdate(id, req.body, {new: true});
        res.status(201).json({id:doc.id,role:doc.role});    
    }catch(err) {
            res.status(400).json(err);
    }
};

exports.loginUser = async (req, res)=> {
    try {
        const user = await User.findOne({email: req.body.email}, 'id name email');
        if(!user){
            res.status(401),json({message: 'no such user email '});
        }else if(user.password==req.body.password){
            res.status(200).json({id:user.id, role:user.role});
        }else{
            res.status(401),json({message: 'invalid credentials'});
        }
    }catch(err) {
            res.status(400).json(err);
    }
};
// change in frontend 8:16:00 and 8:21:45 to 
