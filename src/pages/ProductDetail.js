import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Card } from 'semantic-ui-react'
import ProductService from '../services/productService';


export default function ProductDetail() {

    let { name } = useParams()

    const [product, setProduct] = useState({});

    useEffect(() => {
        let productService = new ProductService()
        productService.getProductByName(name).then(result => setProduct(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group>

                <Card fluid>
                    <Card.Content>

                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta>{product.categoryName}</Card.Meta>
                        <Card.Description><strong>{product.quantityPerUnit}</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Add to cart
          </Button>
                            <Button basic color='red'>
                                Remove to cart
          </Button>
                        </div>
                    </Card.Content>
                </Card>

            </Card.Group>
        </div>
    )
}
