import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Container, Menu, Image, MenuItem } from 'semantic-ui-react';
import CartSummary from './CartSummary';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed-top="true" >
                <Container>
                    <Menu.Item>
                        <Image size="mini" src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/12/AdobeStock_113126068-Converted.jpg' style={{ margin: '0.5em' }} />
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated
                            ? <SignedIn signOut={handleSignOut} />
                            : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
