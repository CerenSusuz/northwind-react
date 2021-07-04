import React, { useState, useEffect } from 'react'
import { Grid, Image, Segment, Button } from 'semantic-ui-react'
import ProductService from "../services/productService";
import { Link } from 'react-router-dom';

export default function Homepage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data.data))
    }, [])

    return (
        <div>
            <h2>Uygun Fiyatlı Ürünlerimiz</h2>
            {products.filter(product => product.unitPrice < 10 && product.unitsInStock > 0)
                .map((product) => {
                    return(
                    <Grid columns={4} divided >
                        <Grid.Row>
                            <Grid.Column>
                                <Image src='https://cdn.pixabay.com/photo/2016/01/19/14/46/cheeses-1148950_960_720.jpg' />
                            </Grid.Column>
                            <Grid.Column>
                                <Segment >{product.productName}</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment className='overflow'>{product.unitPrice} TL</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment >Stokta {product.unitsInStock} adet kaldı.</Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Button >
                                    <Link to={`/products/${product.productName}`}>
                                        ÜRÜNE GİT
                                    </Link>
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    )
                })}
        </div >
    )
}
