const AuthRepository=require('../Connection/authRepository')
const authRepository=new AuthRepository()
class AuthController
{
    constructor()
    {
        
    }
    signin=async(req,res)=>{
        let result=await authRepository.datainsert(req.body)
        if (result.success) {
            res.status(200).json({
                success:true,
                data:result
            });
        } else {
            res.status(200).json({
                success:false,
                data:result
            // switch (result.error){
            //     case process.env.ERROR_NO_USER:
            //         res.status(404).json({
            //             success: false
            //         });
            //         break;
            //     case process.env.ERROR_PASSWORD_MISMATCH:
            //         res.status(401).json({
            //             success: false
            //         });
            //         break;
            //}
        }
            )
    }
}
}
module.exports=AuthController