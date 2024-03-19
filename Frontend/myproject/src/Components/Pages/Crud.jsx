import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Crud.css'; // Assuming you have a CSS file for styling
import Navbar from './Navbar';

const DataTableExample = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    position: '',
    office: '',
    age: '',
    startDate: '',
    salary: ''
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.id) {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      setData([...data, response.data]);
    } else {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${formData.id}`, formData);
      const updatedData = data.map(item => item.id === formData.id ? formData : item);
      setData(updatedData);
    }
    setFormData({
      id: '',
      name: '',
      position: '',
      office: '',
      age: '',
      startDate: '',
      salary: ''
    });
  };

  const handleEdit = (id) => {
    const selectedItem = data.find(item => item.id === id);
    setFormData(selectedItem);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    setData(data.filter(item => item.id !== id));
  };

  return (
      <div className="card mb-3">
      
      <div className="card-header">
        <i className="fa fa-table" /> <h3>Data Table</h3> 
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Location</th>
                <th>Count of Persons</th>
                <th>Date</th>
                <th>Amount</th>
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
      <div className="card-footer">
      <h3>Add/Update Details</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="hidden" name="id" value={formData.id} />
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="position" value={formData.position} onChange={handleChange} placeholder="Number" required />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="office" value={formData.office} onChange={handleChange} placeholder="Location" required />
          </div>
          <div className="form-group">
            <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} placeholder="Count of Persons" required />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="startDate" value={formData.startDate} onChange={handleChange} placeholder="Date" required />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="salary" value={formData.salary} onChange={handleChange} placeholder="Amount" required />
          </div>
          <button type="submit" className="btn btn-primary">{formData.id ? 'Update' : 'Add'}</button>
        </form>
      </div>
    </div>
  );
};

export default DataTableExample;
