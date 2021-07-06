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
import ProductAdd from "../pages/ProductAdd";
import AdminDashboard from "./AdminDashboard";

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position='bottom-right'/>
            <Grid style={{
                marginTop: '7em'
            }}>
                <Grid.Row>
                    <Grid.Column width={2} style={{marginRight:'4em',paddingRight:'4em'}}>
                        <TableList />
                    </Grid.Column>
                    <Grid.Column width={10} style={{marginLeft:'4em',paddingLeft:'4em'}}>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/products" component={ProductList} />
                        <Route exact path="/homepage/products" component={ProductBasicList} />
                        <Route path="/categories" component={CategoryList} />
                        <Route path="/getProducts/:productName" component={ProductDetail} />
                        <Route exact path="/category/:categoryId" component={ProductInCategoryList} />
                        <Route path="/cart" component={CartDetail} />
                        <Route path='/product/add/2a4a8a6a5a' component={ProductAdd} />
                        <Route path='/admin/2a4a8a6a5a' component={AdminDashboard} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}