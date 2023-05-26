import React from "react";

const Input = ({ type, value, onChange, name, label ,errMsg }) => {
    // const str = name.charAt(0).toUpperCase() + name.slice(1)
    return (
        <>
            <div className="input-container">
                <div>
                <label htmlFor={name}>{label} <sup>*</sup></label>
                </div>
                <input type={type} name={name} id={name} value={value} onChange={onChange} required/>
                <div>{errMsg && <div className="error-msg">{errMsg}</div>}</div>
            </div>
        </>
    )
}

export default Input;