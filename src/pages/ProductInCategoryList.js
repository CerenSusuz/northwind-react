import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react'
import ProductService from "../services/productService";
import { useParams } from "react-router";

export default function ProductInCategoryList() {
    let { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let productService = new ProductService()
        productService.getByCategory_CategoryId(categoryId).then(result => setProducts(result.data.data))
    }, [categoryId])

    return (
        <div >
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün </Table.HeaderCell>
                        <Table.HeaderCell>Stok Durumu</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {products.filter(product => product.unitsInStock > 0)
                        .map((product) => {
                            return (
                                <Table.Row active key={product.id}>
                                    <Table.Cell>
                                        <Link to={`/products/${product.productName}`}>
                                            {product.productName}
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell>Stokta Var</Table.Cell>
                                </Table.Row>
                            )
                        })}
                </Table.Body>
            </Table>
        </div>
    )
}