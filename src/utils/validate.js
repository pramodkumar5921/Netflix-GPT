export const checkValidData = (email,password,userName) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isUserNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(userName);

    if(!isUserNameValid) return "Username is not Valid"; 
    
    if(!isEmailValid) return "Email is not Valid";

    if(!isPasswordValid) return "Password is not Valid";


    return null;
}