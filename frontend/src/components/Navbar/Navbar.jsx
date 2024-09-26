import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import logo3 from "../../assets/logo3.png";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <>
      {/*  <div className="w-full flex justify-between items-center  bg-slate-400 py-2 mb-4 fixed top-0"> */}
      <div className="w-full flex justify-between items-center bg-slate-400 py-2 fixed top-0 z-10">
        <div className="px-3 mx-4 ">
          <img src={logo3} className="w-[50px] h-[50px] rounded-full" />
        </div>
        <div className=" md:flex justify-between items-center gap-8 px-3 mx-4 hidden ">
          {auth ? (
            <ul className="nav-ul">
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/add">Add Products</Link>
              </li>
              <li>
                <Link to="/update">Update Products</Link>
              </li>

              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link onClick={logout} to="/signup">
                  Logout | {JSON.parse(auth).name}
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="nav-ul nav-right">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
        <div className="md:hidden px-2 " onClick={() => setOpen(!open)}>
          <MdMenu className="text-4xl text-white" />
        </div>
      </div>
      <ResponsiveMenu open={open} onClose = {handleClose} auth={auth} logout={logout} />
    </>
  );
};

export default Navbar;
