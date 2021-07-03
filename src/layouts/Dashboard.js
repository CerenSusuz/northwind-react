import TableList from './TableList';
import React from 'react';
import { Grid } from 'semantic-ui-react'
import ProductList from '../pages/ProductList';
import { Route } from 'react-router';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';
import CategoryList from '../pages/CategoryList';

export default function Dashboard() {
    return (
            <Grid style={{ 
                backgroundImage: `url("https://cdn.pixabay.com/photo/2018/01/14/23/05/visa-3082813_960_720.jpg")`,
                marginTop: '7em' 
              }}>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <TableList />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/products" component={ProductList} />
                        <Route exact path="/categories" component={CategoryList} />
                        <Route path="/products/:name" component={ProductDetail} />
                        <Route path="/cart" component={CartDetail} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>

    )
}
