import React from "react";
import ProductList from "../pages/ProductList";
import CategoryList from "../pages/CategoryList";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import TableList from "./TableList";
import Homepage from "./Homepage";

export default function Dashboard() {
    return (
        <div>
            <Grid style={{
                marginTop: '7em'
            }}>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <TableList />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/products" component={ProductList} />
                        <Route path="/categories" component={CategoryList} />
                        <Route path="/products/:productName" component={ProductDetail} />
                        <Route path="/cart" component={CartDetail} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}