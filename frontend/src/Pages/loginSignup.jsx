import React, { useState }  from "react";
import './CSS/loginSignup.css'

const LoginSignup = () => {

    const [state,setState ] = useState("Login");
     //we will add one state variable for the input field data
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })
    //We are creating change handeler function
    const changeHandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
   

    //api for the login signup page

    //For login (rayhan_the pro programmer)
    const login = async () =>{
        console.log("Login Function Executed",formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)  //we will get a response and this pass data wil be saved in out response data variable
              if(responseData.success){
                localStorage.setItem('auth-token',responseData.token);
                window.location.replace("/");
              }else{
                alert(responseData.errors)
              }
    }

    //For Signup 
    const signup = async () =>{
        console.log("Signup  Function Executed",formData);

        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'POST',
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)  //we will get a response and this pass data wil be saved in out response data variable
              if(responseData.success){
                localStorage.setItem('auth-token',responseData.token);
                window.location.replace("/");
              }else{
                alert(responseData.errors)
              }
               
    }

    return (
        <div className="loginsignup" >
            <div className="loginsignup-container">
                <h1>{state} </h1>
                <div className="loginsignup-fields">
                  {state==="Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
                    <input name="email" value={formData.email} onChange={changeHandler} type="email"  placeholder="Email Adress"/>
                    <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
                </div>
                <button onClick ={()=>{state==="Login"?login():signup()}}>Continue</button>
                {state==="Sign Up"?
                <p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here </span> </p>:
                <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here </span> </p>
                }
                
                
                <div />
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>By continuing , i agree to the terms of use & privacy policies </p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup