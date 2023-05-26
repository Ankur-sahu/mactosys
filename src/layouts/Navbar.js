import React from "react"
import { getUserData } from "../utils/auth"
import { useNavigate } from "react-router-dom"

const Navbar =()=>{
    const navigate = useNavigate()
    const userData = getUserData()
    const logout = ()=>{
        localStorage.removeItem("login")
        navigate('/')
    }
    return(
        <>
            <nav>
                <div className="logo">LOGO</div>
                <div className="menu-items">{userData && <span onClick={logout}>LogOut</span>}</div> 
            </nav>
        </>
    )
}

export default Navbar