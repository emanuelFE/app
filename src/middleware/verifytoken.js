const jwt =require("jsonwebtoken");
const cfg =require("../config/cfg");

const verify_token = (req,res,next)=>{
    
    const token = req.headers.token;
    
    if(!token)return res.status(401) .send({output:`access denied`});
    jwt.verify(token,cfg.jwt_select,(error,same)=>{
        if(error)return res.status(401).send({output:`erro ao verificar o token -> ${error}`});
        if (!same) return res.status(401) .send({output:`erro de autentinticacão`});
        next();

    })

}
module.exports = verify_token;