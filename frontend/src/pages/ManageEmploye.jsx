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
    });
  };

  const handleChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  const handleSave = async (id) => {
    try {
      const res = await api.put(`/update/${id}`, editFormData);
      console.log(res.data);
      setIsEditForm(null);
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const handleDelete = async (employeeId) => {
    const employeeToDelete = employe.find((emp) => emp._id === employeeId);
    if (
      !window.confirm(
        `Are you sure you want to deactivate employee ${employe.name}?`
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

      alert(`Successfully added new employee: ${employeForm.name}`);
    } catch (error) {
      console.error(error.message);
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
                      <button onClick={() => handleDelete(e._id)}>
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
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={employeForm.name}
            onChange={handleChange2}
          />
          <input
            type="text"
            name="email"
            value={employeForm.email}
            onChange={handleChange2}
          />
          <input
            type="text"
            name="department"
            value={employeForm.department}
            onChange={handleChange2}
          />
          <input
            type="text"
            name="salary"
            value={employeForm.salary}
            onChange={handleChange2}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ManageEmploye;
