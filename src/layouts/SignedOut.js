import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button basic color='blue' onClick={props.signIn}>Sign in</Button>
                <Button basic color='green' style={{marginLeft:'0.5em'}} >Sign up</Button>
            </Menu.Item>
        </div>
    )
}
