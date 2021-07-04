import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Rating,Table } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts().then(result => setProducts(result.data.data))
    }, [])

    return (
        <div >
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün </Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell>Stok Durumu</Table.HeaderCell>
                        <Table.HeaderCell>Puan</Table.HeaderCell>
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
                                    <Table.Cell>{product.category.categoryName}</Table.Cell>
                                    <Table.Cell>Stokta Var</Table.Cell>
                                    <Table.Cell><Rating defaultRating={3} maxRating={5} disabled /></Table.Cell>
                                </Table.Row>
                            )
                        })}
                </Table.Body>
            </Table>
        </div>
    )
}