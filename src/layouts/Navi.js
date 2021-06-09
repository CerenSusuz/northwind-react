import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import CartSummary from './CartSummary';

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed-top="true" >
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>
                        <CartSummary />

                        <Menu.Item>
                            <Button basic color='green'>Sign In</Button>
                            <Button basic color='blue'>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
