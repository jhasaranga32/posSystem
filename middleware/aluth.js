const jwt = require('jsonwebtoken');
const user =require('../model/UserSchema')

const verifyToken = (requiredRoles=[])=>{
    return async(requiredRoles,res,next)=>{
        try{
            const token=requiredRoles.headers['authorization']?.split(' ')[1];
            if(!token){
                return res.status(403).json({message:'access denied,no token'})
            }
            const decoded =jwt.verify(token,process.env.JWT_SECRET);
            req.user=decoded;

            const user =User.findOne({username:decoded.username});
            if(!user){
                return res.status(404).json({message:'User not found'});
            }

            if(requiredRoles.length && !requiredRoles.includes[user.roles]){
                return res.status(403).json({message:'you have no access here'});
            }
            next();
        }catch(error){
            if(error.name=='JsonWebTokenError'){
                return res.status(401).json({message:'invalid token'})
            }else if(error.name ==='TokenExpiredError'){
                 return res.status(401).json({message:'token has expired'})
            }
            return res.status(500).json({message:'tinternel server error'})
        }
    }
}

module.exports = verifyToken;