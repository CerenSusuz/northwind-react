import { Grid, Menu } from "semantic-ui-react";
import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
    return (
        <div>
            <Grid>
                <Grid.Column width={4}>
                    İncele/Düzenle
                    <Menu fluid vertical tabular>
                        <Menu.Item header >
                            <Link to={`/`}>
                                Kategoriler
                            </Link>
                        </Menu.Item>
                        <Menu.Item header >
                            <Link to={`/products`}>
                                Ürünler
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
 
                </Grid.Column>
            </Grid>
        </div>
    )
}
