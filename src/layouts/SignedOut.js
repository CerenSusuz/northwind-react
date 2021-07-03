import React from 'react'
import { Button } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div style={{ margin: '.24em' }}>
            <Button.Group>
                <Button onClick={props.signIn}>Giriş Yap</Button>
                <Button.Or />
                <Button positive>Kayıt Ol</Button>
            </Button.Group>
        </div>
    )
}
