import React, { useState, useEffect } from 'react'
import { Table, Header, Image } from 'semantic-ui-react'
import CategoryService from "../services/categoryService";
import { Link } from 'react-router-dom';

export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let categoryService = new CategoryService()
        categoryService.getCategories().then(result => setCategories(result.data.data))
    }, [])

    return (

        <div >
            <Table basic='very' celled collapsing>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Kategoriler</Table.HeaderCell>
                        <Table.HeaderCell>Ürünler</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {categories.map((category) => (
                        <Table.Row>
                            <Table.Cell>
                                {category.categoryName}
                            </Table.Cell>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Link to={`/category/${category.categoryId}`}>
                                        <Header.Content >
                                            GİT
                                        </Header.Content>
                                        <Image
                                            rounded size="mini"
                                            src="https://cdn.pixabay.com/photo/2016/09/16/19/19/online-store-1674907__340.png"
                                        />
                                    </Link>
                                </Header>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

            </Table>
        </div>
    )

}
