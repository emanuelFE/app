const cfg = ()=>{
    return{
        jwt_secret:"$#N#cT@Tu@p#",
        salt_bc:10,
        jwt_expires:"2d",
        db_path : "mongod://127.0.0.1:27017/bancodados"

    }
}
module.exports=cfg();