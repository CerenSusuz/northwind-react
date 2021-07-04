import React from "react";
import ProductList from "../pages/ProductList";
import ProductInCategoryList from "../pages/ProductInCategoryList";
import ProductBasicList from "../pages/ProductBasicList";
import CategoryList from "../pages/CategoryList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import TableList from "./TableList";
import Homepage from "./Homepage";
import { ToastContainer } from 'react-toastify';

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position='bottom-right'/>
            <Grid style={{
                marginTop: '7em'
            }}>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <TableList />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/products" component={ProductList} />
                        <Route exact path="/homepage/products" component={ProductBasicList} />
                        <Route path="/categories" component={CategoryList} />
                        <Route exact path="/products/:productName" component={ProductDetail} />
                        <Route exact path="/category/:categoryId" component={ProductInCategoryList} />
                        <Route path="/cart" component={CartDetail} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}