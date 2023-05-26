import React, { useState } from "react"
import Input from "../common/Input";
import Button from "../common/Button";
import {Link} from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
    
            <main className="display-row">
                <div className="display-col container">
                    <h1>Login</h1>
                    <form style={{width:"80%"}}>
                        <Input
                            type="email"
                            label="Email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            name="email"
                        />
                        <Input
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password" 
                        />
                        <Button type="submit">Login</Button>
                    </form>
                    <span>Don't have account <Link to="/register">Register</Link></span>
                </div>
            </main>
        
    )
}

export default Login