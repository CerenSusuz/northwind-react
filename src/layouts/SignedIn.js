import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Image avatar spaced="right" src="rc\assets\img\user.pngassets\img\user.png" />
            <Menu.Item>
                <Dropdown pointing="top left" text="Ceren Susuz">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Infos" icon="info" />
                        <Dropdown.Item onClick={props.signOut} text="Log out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

        </div >
    )
}
