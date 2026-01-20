import React from "react";
import { useState, useEffect } from "react";
import api from "../service/Api";
import { useNavigate, useParams } from "react-router-dom";

const ManageEmploye = () => {
  const [employe, setEmploye] = useState([]);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });
  const [isEditForm, setIsEditForm] = useState(null);
  const [employeForm, setEmployeForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmploye = async () => {
      try {
        const res = await api.get("/active");
        setEmploye(res.data.employes);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchEmploye();
  }, []);

  const handleViewClick = (id) => {
    navigate(`/profile/${id}`);
  };

  const handleEdit = (emp) => {
    setIsEditForm(emp._id);
    setEditFormData({
      name: emp.name,
      email: emp.email,
      department: emp.department,
      salary: emp.salary,
    });
  };

  const handleChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleSave = async (id) => {
    try {
      const res = await api.put(`/update/${id}`, editFormData);
      console.log(res.data);

      if (res.status === 200) {
        const updatedEmployeeFromServer = res.data.employe || res.data;

        setEmploye((prevEmployes) =>
          prevEmployes.map((employee) =>
            employee._id === id ? updatedEmployeeFromServer : employee
          )
        );
        setIsEditForm(null);
      } else {
        throw new Error("Update failed with status: " + res.status);
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleDelete = async (employeeId) => {
    const employeeToDelete = employe.find((emp) => emp._id === employeeId);
    if (
      !window.confirm(
        `Are you sure you want to deactivate employee ${employeeToDelete.name}?`
      )
    ) {
      return;
    }
    try {
      const res = await api.delete(`/delete/${employeeId}`);
      console.log(res.data);
      if (res.status === 200) {
        alert(`${employeeToDelete.name} has been deactivated.`);
        setEmploye((prevEmployes) =>
          prevEmployes.filter((emp) => emp._id !== employeeId)
        );
      } else {
        throw new Error("Failed to soft delete employee");
      }
    } catch (error) {
      console.error("Error during deactivation:", error);
    }
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setEmployeForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/create", employeForm);
      console.log(res.data);
      const newEmploye = res.data.employe;

      if (setEmploye) {
        setEmploye((prevEmp) => [...prevEmp, newEmploye]);
      }
      setEmployeForm({});

      alert(`Successfully added new employee: ${employeForm.name}`);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Employee Details</h1>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Salary
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {employe.map((e) => (
                <tr key={e._id} className="hover:bg-gray-50">
                  {isEditForm === e._id ? (
                    <>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {e._id}
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          name="name"
                          value={editFormData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          name="email"
                          value={editFormData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          name="department"
                          value={editFormData.department}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="number"
                          name="salary"
                          value={editFormData.salary}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </td>
                      <td className="px-6 py-4 space-x-2">
                        <button
                          onClick={() => handleSave(e._id)}
                          className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 font-medium"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setIsEditForm(null)}
                          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 font-medium"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {e._id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {e.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {e.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {e.department}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {e.salary}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {e.status}
                      </td>
                      <td className="px-6 py-4 space-x-2">
                        <button
                          onClick={() => handleViewClick(e._id)}
                          className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleEdit(e)}
                          className="px-3 py-1 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 text-sm font-medium"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(e._id)}
                          className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 text-sm font-medium"
                        >
                          Deactivate
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Employee Form */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Add New Employee
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={employeForm.name}
              onChange={handleChange2}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter employee name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={employeForm.email}
              onChange={handleChange2}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={employeForm.department}
              onChange={handleChange2}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter department"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salary
            </label>
            <input
              type="text"
              name="salary"
              value={employeForm.salary}
              onChange={handleChange2}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter salary"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 font-semibold"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManageEmploye;
