import React, { useState } from "react"
import { Link } from "react-router-dom"
import Input from "../common/Input";
import Button from "../common/Button";
import { validationInput } from "../../utils/validateInput";

const Registration = () => {
    const [userInfo,setUserInfo] =useState({
        email:"",
        password:"",
        first_name:"",
        last_name:"",
        username:"",
        zip_code:"",
        phone:"",
        confirm_password:""
    })

    const [validateFrom,setValidateForm] = useState({
        email:"",
        password:"",
        first_name:"",
        last_name:"",
        username:"",
        zip_code:"",
        phone:"",
        confirm_password:""
    })

    const handleInput =(e)=>{
        const {name, value} = e.target
        setUserInfo({...userInfo,[name]:value})
        setValidateForm({...validateFrom,[name]:""})
        console.log(name, "name", typeof value,"user form")
    }

    const registerUser = (e) => {
        e.preventDefault()
        const formData = {...userInfo}
        const errorMsg = {...validateFrom}
        validationInput(formData,errorMsg)
        const { email, first_name, last_name, username, zip_code, phone, confirm_password} = errorMsg
        console.log(email, first_name, last_name, username, zip_code, phone, confirm_password)
        if(email || first_name || last_name || username || zip_code || phone || confirm_password){
            console.log(errorMsg)
            setValidateForm(errorMsg)
            return
        }
        console.log("seccess")

    }
    return (
        <main className="display-row">
            <div className="display-col container">
                <h1>Registration</h1>
                <form onSubmit={registerUser} style={{ width: "80%" }}>
                    <div className="form-row display-row">
                        <Input
                            type="text"
                            label="First Name"
                            // value={username}
                            onChange={(e) => handleInput(e)}
                            name="first_name"
                            errMsg={validateFrom.first_name}
                        />
                        <Input
                            type="text"
                            label="Last Name"
                            // value={username}
                            onChange={(e) => handleInput(e)}
                            name="last_name"
                            errMsg={validateFrom.last_name}
                        />

                    </div>
                    <Input
                        type="text"
                        label="Username"
                        // value={username}
                        onChange={(e) => handleInput(e)}
                        name="username"
                        errMsg={validateFrom.username}
                    />
                    <Input
                        type="email"
                        label="Email"
                        // value={username}
                        onChange={(e) => handleInput(e)}
                        name="email"
                        errMsg={validateFrom.email}
                    />
                    <div className="form-row display-row">
                        <Input
                            type="number"
                            label="Mobile Number"
                            // value={username}
                            onChange={(e) => handleInput(e)}
                            name="phone"
                            errMsg={validateFrom.phone}
                        />
                        <Input
                            type="number"
                            label="Zip code"
                            // value={username}
                            onChange={(e) => handleInput(e)}
                            name="zip_code"
                            errMsg={validateFrom.zip_code}
                        />
                    </div>
                    <div className="form-row display-row">
                        <Input
                            type="password"
                            label="Password"
                            // value={password}
                            onChange={(e) => handleInput(e)}
                            name="password"
                        />
                        <Input
                            type="password"
                            label="Confirm Password"
                            // value={password}
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