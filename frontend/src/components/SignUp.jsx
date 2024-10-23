import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    console.warn(name, email, password);
    // let result = await fetch("e-commerce-mern-project-backend.vercel.app/signup", {
    let result = await fetch("http://localhost:5001/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log("result", result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex flex-col ">
        <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
        <input
          className="p-2 my-2 border-slate-400 border-[2px] rounded-lg "
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-2 my-2 border-slate-400 border-[2px] rounded-lg "
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="p-2 my-2 border-slate-400 border-[2px] rounded-lg "
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={collectData}
          type="button"
          className=" p-2 mt-4 bg-slate-400 rounded-lg font-medium text-white"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
