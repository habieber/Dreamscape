import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage ({ setUser }) {
    return (
        <>
            <div className="form-container flex justify-center items-start">
                <h1 className="text-center text-xl">Welcome to</h1>
                <h1 className="text-5xl title">Dreamscape</h1>
                <span className="text-center">Log In or Sign Up to See Your Dreams</span>
            </div>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser}/>
        </>

    )
}