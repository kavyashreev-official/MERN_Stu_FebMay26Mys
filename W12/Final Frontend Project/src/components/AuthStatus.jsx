import { useState } from "react";

export default function AuthStatus(){
    const [isLoggedIn,setLoggedIn]= useState(false);

    return(
        <section>
            <h2>Authentication Status</h2>
            <p>
                Current Status:
                {
                    isLoggedIn ? "Logged In" : "Guest User"
                }
            </p>
            <button onClick={()=>{
                setLoggedIn(!isLoggedIn);
            }}>
                {isLoggedIn ? "Logout" : "Login"}
            </button>
        </section>
    );
}