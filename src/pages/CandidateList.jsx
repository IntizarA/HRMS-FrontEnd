import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

import {CandidateService} from '../services/CandidateService'
export default function CandidateList() {
const [candidates,setCandidates]=useState([])

useEffect(()=>{

    let candidateService=new CandidateService()
candidateService.getCandidates().then(result=>setCandidates(result.data.data))
})

    return (
        <div>
             <Table  >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign='center'>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Nationality Id</Table.HeaderCell>
        <Table.HeaderCell>Date of birth</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Email</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
candidates.map(candidate=>(
    <Table.Row key={candidate.id}>
    <Table.Cell>{candidate.first_name}</Table.Cell>
    <Table.Cell>{candidate.last_name}</Table.Cell>
    <Table.Cell>{candidate.nationalityId}</Table.Cell>
    <Table.Cell>{candidate.dateofbirth}</Table.Cell>
    <Table.Cell>{candidate.user.email}</Table.Cell>
  </Table.Row>
))
        }
     
    </Table.Body>
  </Table>
        </div>
    )
}
