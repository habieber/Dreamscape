import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage ({ setUser }) {
    return (
        <main>
            <h1>Welcome to Quick Notes</h1>
            <h3>Sign Up Or Log In to View & Create Notes</h3>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser}/>
        </main>
    )
}