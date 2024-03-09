import React, { useState } from 'react'

const ListDepartmentComponent = () => {

    let dummyData = [
        {
            "id":1,
            "departmentName":"R&D",
            "departemntDescription":"Research and Development Department"
        },
        {
            "id":2,
            "departmentName":"Finance",
            "departemntDescription":"Finance Department"
        },
        {
            "id":3,
            "departmentName":"Sports",
            "departemntDescription":"Sports Department"
        }
    ]

    const [departments,setDepartments] = useState(dummyData);

  return (
    <div className="container">
        <h2 className="text-center"><strong>List Of Departments</strong></h2>
        <table className="table table-bordered table-hover rounded-4 overflow-hidden" >
            <thead className='table-dark' >
                <tr>
                    <th>Department Id</th>
                    <th>Department Name</th>
                    <th>Department Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    departments.map(department =>
                            <tr key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.departmentName}</td>
                                <td>{department.departemntDescription}</td>
                            </tr>
                        )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListDepartmentComponent