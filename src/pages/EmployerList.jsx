import React, { useEffect, useState } from 'react'
import { EmployerService } from '../services/EmployerService'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
export default function EmployerList() {

    const [employers, setEmployer] = useState([])
    
    useEffect(()=>    {
        let employerService=new EmployerService()
        employerService.getEmployers().then(result=>setEmployer(result.data.data))
    })
    return (
        <div className="distance">
              <Table  >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign='center'>Company Name</Table.HeaderCell>
        <Table.HeaderCell>Web Adress</Table.HeaderCell>
        <Table.HeaderCell>Phone Number</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Email</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
employers.map(employer=>(
    <Table.Row key={employer.id}>
    <Table.Cell>{employer.company_name}</Table.Cell>
    <Table.Cell>{employer.web_address}</Table.Cell>
    <Table.Cell>{employer.phone_number}</Table.Cell>
    <Table.Cell>{employer.user.email}</Table.Cell>
  </Table.Row>
))
        }
     
    </Table.Body>
  </Table>
        </div>
    )
}
