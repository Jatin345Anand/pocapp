const mongoose = require('../common/connection');
const schema = mongoose.Schema;
const userSchema = new schema({
    fn:String,
    ln:String,
    skills:String,
    profile:Object,
    resume:Object
}, { versionKey: false});
const users = mongoose.model('users',userSchema);
module.exports = users;