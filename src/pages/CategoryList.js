import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import CategoryService from "../services/categoryService";

export default function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let categoryService = new CategoryService()
        categoryService.getCategories().then(result => setCategories(result.data.data))
    }, [])

    return (
        <div >
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {categories.map((category) => (
                        <Table.Row active key={category.categoryId}>
                            <Table.Cell>{category.categoryName}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}
