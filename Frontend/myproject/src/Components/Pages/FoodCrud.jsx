import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FoodCrud.css';
import { Link } from 'react-router-dom';

const CrudApp = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    address: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setData(response.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  

  const handleDelete = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    setData(data.filter(item => item.id !== id));
  };

  return (
       
       <div className="card mb-3">
      
       <div className="card-header">
          <h3>Food Details</h3> 
          <button><Link to = '/food'>Back</Link></button>
       </div>
       <div className="card-body">
         <div className="table-responsive">
           <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
             <thead>
               <tr>
                 <th>Event Name</th>
                 <th>Food Item 1</th>
                 <th>Food Item 1</th>
                 <th>Food Item 1</th>
                 <th>Food Item 1</th>
                 <th>No.of.persons</th>
                 <th>Actions</th>
               </tr>
             </thead>
             <tbody>
               {data.map(item => (
                 <tr key={item.id}>
                   <td>{item.name}</td>
                   <td>{item.position}</td>
                   <td>{item.office}</td>
                   <td>{item.age}</td>
                   <td>{item.startDate}</td>
                   <td>{item.salary}</td>
                   <td>
                     <button className="btn btn-primary mr-1" onClick={() => handleEdit(item.id)}>Edit</button>
                     <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </div>
  </div>
  );
};

export default CrudApp;
