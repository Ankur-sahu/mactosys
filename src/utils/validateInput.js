import matchPattern from "./matchPattern"

export const validationInput =(userInfo,errorMsg)=>{
    const namePattern = /^[a-z ,.'-]+$/i
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const userNamePattern =/^[A-Za-z][A-Za-z0-9_]{7,29}$/

    if(!matchPattern(namePattern,userInfo.first_name) || !userInfo.first_name){
        errorMsg.first_name = "Invailid First Name"
    }

    if(!matchPattern(namePattern,userInfo.last_name) || !userInfo.last_name){
        errorMsg.last_name = "Invailid Last Name"
    }
    if(!matchPattern(userNamePattern,userInfo.username) || !userInfo.username){
        errorMsg.username = "Username Must Be Alpha Numeric"
    }
    console.log(userInfo.phone.length)
    if(!userInfo.phone.length ===10 || !userInfo.phone){
        errorMsg.phone = "Invailid Number"
    }
    if(!userInfo.zip_code.length ===6 || !userInfo.zip_code){
        errorMsg.zip_code = "Zip Code Must Be Six Digits"
    }
    if(!matchPattern(emailPattern,userInfo.email) || !userInfo.email){
        errorMsg.email = "Invailid Email"
    }
    if(userInfo.password !== userInfo.confirm_password){
        errorMsg.confirm_password = "Password Miss Match"
    }
    
}