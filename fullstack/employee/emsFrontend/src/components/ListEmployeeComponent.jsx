import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
    
    const [employees, setEmployees] =  useState([])

    const  navigator= useNavigate();

    useEffect(() =>{
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator("/add-employee")
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`) 
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) =>{
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'><strong>List of Employees</strong></h2> 
        
        <button type="button" class="btn btn-info" onClick={addNewEmployee} style={{marginBottom:'10px',marginLeft:'10px'}}>Add Employee</button>
        <table className="table table-bordered table-hover rounded-4 overflow-hidden" >
            <thead className='table-dark' >
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{marginLeft:'10px'}}>Delete</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
    
  )
}

export default ListEmployeeComponent