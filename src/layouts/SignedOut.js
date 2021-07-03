import React from 'react'
import { Button} from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div style={{margin:'.24em'}}>

                <Button basic color='blue' onClick={props.signIn}>Giriş Yap</Button>
                <Button basic color='green'>Kayıt Ol</Button>

        </div>
    )
}
