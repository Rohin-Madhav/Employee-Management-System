import React from "react";
import { UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-600 shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <UserCheck className="w-7 h-7 text-white" />
            <h1 className="text-white text-xl font-semibold">Employee Management</h1>
          </div>
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="text-white hover:text-gray-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/manage" 
              className="text-white hover:text-gray-200 font-medium"
            >
              Manage Employees
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;