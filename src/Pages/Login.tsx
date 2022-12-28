import Button from "@/Components/Button";
import { login } from "@/services/auth";
import React, { useState } from "react";

const Login = () => {
  const onLogin = () => {
    if (!email) {
      alert("email is required");
      return;
    }
    if (password.length < 6) {
      alert("password is must 6 characters");
      return;
    }
    login({ email: email, password: password });
  };
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="bg-white rounded-xl drop-shadow-2xl text-gray-600 p-8 px-16">
        <div className="grid justify-items-center space-y-3">
          <img src="src\assets\sms.png" />
          <h1 className="font-bold py-2">Welcome to SMS!</h1>

          <div className="flex border rounded-xl relative">
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
            />
          </div>
          <div className="flex border rounded-xl relative">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              placeholder="Password"
              className="w-full py-4 px-6 border rounded-xl bg-slate-50 focus:outline-none border-none"
            />
          </div>
          <button
            onClick={onLogin}
            className="w-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-md py-3 text-gray-50-text-lg text-white button"
          >
            Login
          </button>
          <p className="text-center text-gray-400 italic">
            don't have an account yet?{" "}
            <a href="/signup" className="text-blue-600 not-italic font-bold">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
