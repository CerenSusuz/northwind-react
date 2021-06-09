import Categories from './Categories';
import ProductList from './ProductList';
import React from 'react';
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <ProductList />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
