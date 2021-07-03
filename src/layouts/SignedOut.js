import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button basic color='blue' onClick={props.signIn}>Giriş Yap</Button>
                <Button basic color='green'>Kayıt Ol</Button>
            </Menu.Item>
        </div>
    )
}
