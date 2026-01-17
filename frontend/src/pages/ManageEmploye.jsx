import React from "react";
import { useState, useEffect } from "react";
import api from "../service/Api";
import { useNavigate, useParams } from "react-router-dom";

const ManageEmploye = () => {
  const { id } = useParams();
  const [employe, setEmploye] = useState([]);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
    status: "",
  });
  const [isEditForm, setIsEditForm] = useState(null);
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
  }, [id]);

  const handleViewClick = (id) => {
    navigate(`/profile/${id}`);
  };

  const handleEdit = (emp) => {
    setIsEditForm(emp._id);
    setEditFormData({
      name: emp.name,
      department: emp.department,
      salary: emp.salary,
      status: emp.status,
    });
  };

  const handleChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleSave = async (id) => {
    try {
      const res = await api.put(`/${id}`, editFormData);
      console.log(res.data);
      setIsEditForm(null);
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Employee Details</h1>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employe.map((e) => (
              <tr key={e._id}>
                {isEditForm === e._id ? (
                  <>
                    <td>{e._id}</td>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="department"
                        value={editFormData.department}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="salary"
                        value={editFormData.salary}
                        onChange={handleChange}
                      />
                    </td>
                    <td>
                      <select
                        name="status"
                        value={editFormData.status}
                        onChange={handleChange}
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={() => handleSave(e._id)}>Save</button>
                      <button onClick={() => setIsEditForm(null)}>
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{e._id}</td>
                    <td>{e.name}</td>
                    <td>{e.department}</td>
                    <td>{e.salary}</td>
                    <td>{e.status}</td>
                    <td>
                      <button onClick={() => handleViewClick(e._id)}>
                        View
                      </button>
                      <button onClick={() => handleEdit(e)}>Edit</button>
                      {/* <button onClick={() => handleDelete(e._id)}>Delete</button> */}
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEmploye;
