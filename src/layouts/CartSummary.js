import React from 'react';
import { Dropdown } from 'semantic-ui-react';


export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Categories'>
                <Dropdown.Menu>
                    <Dropdown.Item>a</Dropdown.Item>
                    <Dropdown.Item>b</Dropdown.Item>
                    <Dropdown.Item>c</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
