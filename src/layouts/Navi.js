import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Container, Menu, Image, Dropdown } from 'semantic-ui-react';
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
            <Menu fixed='top' inverted style={{ opacity: '.7' }} >
                <Container>
                    <Menu.Item as='a' header >
                        <Image size='mini' src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/12/AdobeStock_113126068-Converted.jpg' style={{ marginRight: '1.5em' }} />
                        e-commerce
                    </Menu.Item>
                    <Menu.Item as='a' icon='home' >Anasayfa</Menu.Item>
                    <Menu.Item position='right'>
                        <CartSummary />
                        {isAuthenticated
                            ? <SignedIn signOut={handleSignOut} />
                            : <SignedOut signIn={handleSignIn} />}
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    )
}
