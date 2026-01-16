import React from "react";
import { useState,useEffect } from "react";
import api from "../service/Api"


const ManageEmploye = () => {
    const [employe, setEmploye] = useState([]);

  useEffect(() => {
    const fetchEmploye = async () => {
      try {
        const res = await api.get("/active");
      setEmploye(res.data.employes);
      } catch (error) {
        console.log(error,"Employe fetching err"); 
      }
    };
    fetchEmploye();
  }, []);
  return <div>
    <div>
        <h1>Employe Details</h1>
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
         {employe.map((e)=>(
             <tr key={e._id} > 
              <td>{e._id}</td>
              <td>{e.name}</td>
              <td>{e.department}</td>
              <td>{e.salary}</td>
              <td>{e.status}</td>
              <td>
  <button>view</button>
  <button>Edit</button>
  <button>Delete</button>

              </td>

            </tr>
         ))}

        </tbody>
      </table>
    </div>
  </div>;
};

export default ManageEmploye;
