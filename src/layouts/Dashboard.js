import Categories from './Categories';
import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import ProductList from '../pages/ProductList';
import { Route } from 'react-router';
import ProductDetail from '../pages/ProductDetail';
import CartDetail from '../pages/CartDetail';

export default function Dashboard() {
    return (
        <div>
            <Grid >
                <Grid.Row>
                    <Grid.Column width={2}>
                    <Image className="dashboardImage" srcset="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png, https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png " src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_160_120.png" alt="Mağaza, Online, E-Ticaret, Alışveriş, E Ticaret" />
                    </Grid.Column>
                    <Grid.Column width={3}>
                    <Image className="dashboardImage" srcset="https://cdn.pixabay.com/photo/2018/01/14/23/05/visa-3082813_960_720.jpg, https://cdn.pixabay.com/photo/2018/01/14/23/05/visa-3082813_1280.jpg " src="https://cdn.pixabay.com/photo/2018/01/14/23/05/visa-3082813_160_120.jpg" alt="Vize, Iş, Satın Alma, Kart, Cep Telefonu, Bankacılık" />
                    </Grid.Column>
                    <Grid.Column width={2}>
                    <Image className="dashboardImage" src="https://media.istockphoto.com/vectors/abstract-minimal-geometric-circle-background-for-business-annual-vector-id1210701957?b=1&k=6&m=1210701957&s=170667a&w=0&h=GDMwh1UvGUB0jCl7pMf2uLUtq9a1pN0cQo-NVRpwTMc=" alt="Sponsored image"></Image>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products" component={ProductList} />
                        <Route path="/products/:name" component={ProductDetail} />
                        <Route path="/cart" component={CartDetail} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
