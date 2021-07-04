import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { productName } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService()
    productService.getByProductName(productName).then(result => setProduct(result.data.data))
  }, [productName])

  return (
    <div>
      <Card.Group>
        <Card >
          <Card.Content>
            <Image
              floated="right"
              size="small"
              src="https://cdn.pixabay.com/photo/2016/09/16/19/19/online-store-1674907__340.png"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Description><strong>{product.unitPrice} TL</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Add
              </Button>
              <Button basic color="red">
                Remove
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}