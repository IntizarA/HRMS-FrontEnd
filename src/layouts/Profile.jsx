import React from 'react'
import {Dropdown} from 'semantic-ui-react'
export default function Profile() {
    return (
        <div>
             <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
        </div>
    )
}
