import matchPattern from "./matchPattern"

export const validationInput = (userInfo, errorMsg) => {
    const namePattern = /^[a-z ,.'-]+$/i
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const userNamePattern = /^[A-Za-z][A-Za-z0-9_]{7,29}$/

    if (Object.hasOwn(userInfo, "first_name")) {
        if (!matchPattern(namePattern, userInfo.first_name) || !userInfo.first_name) {
            errorMsg.first_name = "Invailid First Name"
        }
    }

    if (Object.hasOwn(userInfo, "last_name")) {
        if (!matchPattern(namePattern, userInfo.last_name) || !userInfo.last_name) {
            errorMsg.last_name = "Invailid Last Name"
        }
    }
    if (Object.hasOwn(userInfo, "username")) {
        if (!matchPattern(userNamePattern, userInfo.username) || !userInfo.username) {
            errorMsg.username = "Username Must Be Alpha Numeric"
        }
    }
    if (Object.hasOwn(userInfo, "phone")) {
        if (!(userInfo.phone.length === 10) || !userInfo.phone) {
            errorMsg.phone = "Invailid Number"
        }
    }
    if (Object.hasOwn(userInfo, "zip_code")) {

        if (!(userInfo.zip_code.length === 6) || !userInfo.zip_code) {
            errorMsg.zip_code = "Six Digits Requered"
        }
    }


    if (!matchPattern(emailPattern, userInfo.email) || !userInfo.email) {
        errorMsg.email = "Invailid Email"
    }

    if (!(userInfo.password.length > 7)) {
        errorMsg.password = "Invalid Password";
    }

    if (Object.hasOwn(userInfo, "confirm_password")) {
        if (!(userInfo.confirm_password.length > 7)) {
            errorMsg.confirm_password = "Invalid Password";
        }

        if (userInfo.password !== userInfo.confirm_password) {
            errorMsg.confirm_password = "Password MissMatch"
        }
    }
}