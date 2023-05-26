import React, { useEffect, useState } from "react"
import Input from "../common/Input";
import Button from "../common/Button";
import {Link, useNavigate} from "react-router-dom"
import { validationInput } from "../../utils/validateInput";
import { login } from "../../services/api";
import { toast } from "react-toastify";
import { getUserData } from "../../utils/auth";

const Login = () => {
    const initValue = {
        email:"",
        password:"",
    }
    const [userInfo,setUserInfo] =useState(initValue)
    const [validateFrom,setValidateForm] = useState(initValue)
    const navigate = useNavigate()
    const handleInput =(e)=>{
        const {name, value} = e.target
        setUserInfo({...userInfo,[name]:value})
        setValidateForm({...validateFrom,[name]:""})
    }
    const loginForm =async (e)=>{
        e.preventDefault()
        const formData = {...userInfo}
        const errorMsg = {...validateFrom}
        validationInput(formData,errorMsg)
        const { email,password} = errorMsg
        if(email ||password){
            setValidateForm(errorMsg)
            return
        }
        
        try {
            let payload ={...userInfo}
           const data = await login(payload);
            if(!data.statuscode){
                toast.error(data.message, {
                    position: "top-center",
                    autoClose: 1000,
    
                });
            }else{
                const resData = JSON.stringify(data)
                localStorage.setItem("login",resData)
                navigate('/dashboard')

            }
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(()=>{
        if(getUserData()){
            navigate('/dashboard')
        }
    },[])
    return (
    
            <main className="display-row">
                <div className="display-col container">
                    <h1>Login</h1>
                    <form onSubmit={loginForm} style={{width:"80%"}}>
                        <Input
                            type="email"
                            label="Email"
                            onChange={(e) => handleInput(e)}
                            name="email"
                            errMsg={validateFrom.email}
                        />
                        <Input
                            type="password"
                            label="Password"
                            onChange={(e) => handleInput(e)}
                            name="password" 
                            errMsg={validateFrom.password}
                        />
                        <Button type="submit">Login</Button>
                    </form>
                    <span>Don't have account <Link to="/register">Register</Link></span>
                </div>
            </main>
    )
}

export default Login