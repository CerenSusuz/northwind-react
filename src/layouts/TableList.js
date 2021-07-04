import React from 'react';
import { Menu, Image, Statistic } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function TableList() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item>
          <Statistic>
            <Statistic.Label>Günlük Site Ziyareti</Statistic.Label>
            <Statistic.Value>4,109</Statistic.Value>
          </Statistic>
        </Menu.Item>
        <Menu.Item>
          <Image circular style={{ width: '500px' }} src='https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png' />
        </Menu.Item>
        <Menu.Item>
          <Link to={`/homepage/products/`}>
            Tüm Ürünler
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={`/categories/`}>
            Kategoriler
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}
