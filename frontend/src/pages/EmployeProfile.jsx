import React, { useState, useEffect } from "react";
import api from "../service/Api";
import { useParams } from "react-router-dom";

const EmployeProfile = () => {
  const { id } = useParams();
  const [employeProfile, setEmployeProfile] = useState({});
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/${id}`);
        setEmployeProfile(res.data.employee);
        console.log(res.data.employee);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProfile();
  }, [id]);
  return (
    <div className="max-w-2xl h-screen mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {employeProfile.name}'s Profile
        </h1>
      </div>
      <div className="bg-teal-300 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Employee Details
        </h2>
        <div className="space-y-3">
          <p className="text-gray-700">
            <span className="font-medium">Name:</span> {employeProfile.name}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">ID:</span> {employeProfile._id}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Email:</span> {employeProfile.email}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Department:</span>{" "}
            {employeProfile.department}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Salary:</span> {employeProfile.salary}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Status:</span> {employeProfile.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeProfile;
