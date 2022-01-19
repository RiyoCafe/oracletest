const Repository=require('./main')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const tokenExpiryDuration=86400;

class AuthRepository extends Repository
{
    constructor()
    {
        super();
    }
    datainsert=async data=>
    {
        const sql = `insert into admin (name,city,streetname,country,mail,password) values(:0,:1, :2, :3, :4, :5)`;
        const params=[data.name,data.city,data.streetname,data.country,data.mail,data.password];
        const result1=await this.sqlQuery(sql,params);
        if(result1.data.length>0)
        {
            return{
                
                hello:result1.data
            }
        }
    }
}
module.exports=AuthRepository