import React, { useState, useEffect } from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function Homepage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data.data))
    }, [])
    //'https://cdn.pixabay.com/photo/2016/01/19/14/46/cheeses-1148950_960_720.jpg'
    return (
        <div>
            {products.map((product) => (
                <Grid columns={5} divided >
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
                    </Grid.Row>
                </Grid>
            ))}

        </div >
    )
}
