import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("e-commerce-mern-project-backend.vercel.app/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result.auth) {
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    } else {
      alert("Please enter correct details");
    }
  };
  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col ">
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        <input
          className="p-2 my-2 border-slate-400 border-[2px] rounded-lg "
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <input
          className="p-2 my-2 border-slate-400 border-[2px] rounded-lg "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button
          className=" p-2 mt-4 bg-slate-400 rounded-lg font-medium text-white "
          onClick={handleLogin}
          type="button"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
