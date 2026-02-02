import React from "react";
import { UserCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken")

  const handleLogout = () => {
     localStorage.removeItem("userToken");
    navigate("/");
  };
  return (
    <nav className="bg-teal-600 shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <UserCheck className="w-7 h-7 text-white" />
            <h1 className="text-white text-xl font-semibold">
              Employee Management
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="text-white hover:text-gray-200 font-medium">
              Home
            </Link>
            <Link
              to="/manage"
              className="text-white hover:text-gray-200 font-medium"
            >
              Manage Employees
            </Link>
            {token ? (
              <button className="bg-red-500 text-white cursor-pointer px-4 py-2 rounded font-bold hover:bg-red-700"
               onClick={handleLogout}>Sign out</button>
            ) : (
              <Link
                to="/login"
                className="bg-indigo-500 text-white px-4 py-2 rounded font-bold hover:bg-indigo-700"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
