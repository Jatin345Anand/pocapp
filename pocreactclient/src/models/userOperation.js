import USERCLASS from './userClass';
const USEROPERATIONS ={
    USERS:[],
    ADDUSER:function(fn,sn,skills,profile,resume){
        this.USERS.push(new USERCLASS(fn,sn,skills,profile,resume));
    },
    GETUSERS:function(){
        return this.USERS;
    },
    REMOVEALLUSER:function(){
        var len = this.USERS.length;
        for(let i=0;i<len;i++){
            this.USERS.pop();
        }
    }
}
export default USEROPERATIONS;