const mongoose = require ("mongoose");

const schema_wallet = new mongoose.Schema({
    cardname:{type:String, require:true},
    balance:{type:Number, require:true},
    cardlimit:{type:Number, require:true},
    Userbalance:{type:Number, require:true},
    iduser:{type:String, require:true},
});
module.exports = mongoose.model("wallet",schema_wallet);