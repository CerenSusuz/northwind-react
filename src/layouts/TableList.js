import React from 'react';
import { Menu } from 'semantic-ui-react';

export default function TableList() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item
          name='Kategoriler'
        />
        <Menu.Item
          name='Ürünler'
        />
        <Menu.Item
          name='Kullanıcılar'
        />
      </Menu>
    </div>
  )
}
