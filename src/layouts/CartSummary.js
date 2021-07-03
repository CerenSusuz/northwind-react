import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';


export default function CartSummary() {
    return (
            <Dropdown item icon="cart" >
                <Dropdown.Menu style={{ marginTop:'1em' }}>
                    <Dropdown.Item>ürün</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    )
}
