import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.int";
import { useState } from "react";

const Login = () => {
    const [user,setUser]=useState();
    const provider = new GoogleAuthProvider();
    const loginWithGoogle=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            console.log(result.user.displayName);
            setUser(result.user.displayName);

        })
        .catch(err=>console.log("Error:",err))
    }
    return (
        <div>
            <h1>Login</h1>
            <h2>{user}</h2>
            <button onClick={loginWithGoogle}>Login With Google</button>
        </div>
    );
};

export default Login;