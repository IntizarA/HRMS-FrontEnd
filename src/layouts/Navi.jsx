import React from 'react'
import { Button, Container,Dropdown, Menu } from 'semantic-ui-react'
import Profile from './Profile'
export default function Navi() {
    return (
        <div>
       <Menu inverted fixed="top" size='large'>
           <Container>
        <Menu.Item
          name='home'
        
        />
        <Menu.Item
          name='messages'
         
        />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
           <Profile/>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
     
        </div>
    )
}
