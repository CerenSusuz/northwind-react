import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';


export default function CartSummary() {
    return (
        <div>
            <Dropdown item icon="cart">
                <Dropdown.Menu>
                    <Dropdown.Item>a</Dropdown.Item>
                    <Dropdown.Item>b</Dropdown.Item>
                    <Dropdown.Item>c</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">go to cart</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
