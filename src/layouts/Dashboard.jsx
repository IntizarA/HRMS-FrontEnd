import React from 'react'
import CandidateList from '../pages/CandidateList'
import Categories from './Categories'
import EmployerList from '../pages/EmployerList'
import { Grid } from 'semantic-ui-react'
export default function Dashboard() {
    return (
        <div>
 <Grid>
        {/* grid setir ve sutunlardan istifade ederek columnlari yan yana getirmek uchun istifade edilir sematic ui de 16 beraber hisseye bolerek ishleri gorur */}
        <Grid.Row>
          <Grid.Column width={3}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={7}>
         <CandidateList/>
          </Grid.Column>
          <Grid.Column width={4}>
         <EmployerList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
            
        </div>
    )
}
