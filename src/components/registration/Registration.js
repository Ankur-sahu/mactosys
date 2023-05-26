import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Input from "../common/Input";
import Button from "../common/Button";
import { validationInput } from "../../utils/validateInput";
import { register } from "../../services/api";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getUserData } from "../../utils/auth";

const Registration = () => {
    const initValue = {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        username: "",
        zip_code: "",
        phone: "",
        confirm_password: ""
    }
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState(initValue)
    const [validateFrom, setValidateForm] = useState(initValue)

    const handleInput = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
        setValidateForm({ ...validateFrom, [name]: "" })
    }

    const registerUser = async (e) => {
        e.preventDefault()
        const formData = { ...userInfo }
        const errorMsg = { ...validateFrom }
        validationInput(formData, errorMsg)
        const { email, first_name, last_name, username, zip_code, phone, confirm_password } = errorMsg
        if (email || first_name || last_name || username || zip_code || phone || confirm_password) {
            setValidateForm(errorMsg)
            return
        }

        try {
            let payload = { ...userInfo }
            const data = await register(payload);
            if(data.statuscode){
                toast.success('Otp sent to your email!', {
                    position: "top-center",
                    autoClose: 2000,
                });
                navigate('/')
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
                <h1>Registration</h1>
                <form onSubmit={registerUser} style={{ width: "80%" }}>
                    <div className="form-row display-row">
                        <Input
                            type="text"
                            label="First Name"
                            value={userInfo.first_name}
                            onChange={(e) => handleInput(e)}
                            name="first_name"
                            errMsg={validateFrom.first_name}
                        />
                        <Input
                            type="text"
                            label="Last Name"
                            value={userInfo.last_name}
                            onChange={(e) => handleInput(e)}
                            name="last_name"
                            errMsg={validateFrom.last_name}
                        />

                    </div>
                    <Input
                        type="text"
                        label="Username"
                        value={userInfo.username}
                        onChange={(e) => handleInput(e)}
                        name="username"
                        errMsg={validateFrom.username}
                    />
                    <Input
                        type="email"
                        label="Email"
                        value={userInfo.email}
                        onChange={(e) => handleInput(e)}
                        name="email"
                        errMsg={validateFrom.email}
                    />
                    <div className="form-row display-row">
                        <Input
                            type="number"
                            label="Mobile Number"
                            value={userInfo.phone}
                            onChange={(e) => handleInput(e)}
                            name="phone"
                            errMsg={validateFrom.phone}
                        />
                        <Input
                            type="number"
                            label="Zip code"
                            value={userInfo.zip_code}
                            onChange={(e) => handleInput(e)}
                            name="zip_code"
                            errMsg={validateFrom.zip_code}
                        />
                    </div>
                    <div className="form-row display-row">
                        <Input
                            type="password"
                            label="Password"
                            value={userInfo.password}
                            onChange={(e) => handleInput(e)}
                            name="password"
                            errMsg={validateFrom.password}
                        />
                        <Input
                            type="password"
                            label="Confirm Password"
                            value={userInfo.confirm_password}
                            onChange={(e) => handleInput(e)}
                            name="confirm_password"
                            errMsg={validateFrom.confirm_password}
                        />
                    </div>
                    <Button type="submit">Register</Button>
                </form>
                <span>Already Have account <Link to="/">Login</Link></span>
            </div>
        </main>
    )
}

export default Registration