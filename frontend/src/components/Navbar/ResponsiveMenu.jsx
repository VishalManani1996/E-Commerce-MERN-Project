import React from "react";
import { Link } from "react-router-dom";

const ResponsiveMenu = ({ open, onClose, auth, logout }) => {
  return (
    <>
      {open && (
        <>
          {/* Semi-transparent background overlay */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
            onClick={onClose}
          ></div>

          {/* Menu content */}
          <div className="absolute top-20 left-0 w-full h-screen  z-20">
            <div className="bg-slate-400 text-xl font-semibold uppercase flex flex-col py-10 m-6 rounded-3xl">
              {auth ? (
                <ul
                  onClick={onClose}
                  className="flex flex-col items-center gap-10 text-white"
                >
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
                <ul
                  onClick={onClose}
                  className="flex flex-col items-center gap-10 text-white"
                >
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ResponsiveMenu;
