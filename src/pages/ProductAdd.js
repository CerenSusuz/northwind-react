import { Formik, Form} from "formik";
import * as Yup from "yup";
import { Button} from "semantic-ui-react";
import React from 'react';
import KodlamaioTextInput from "../utilities/customFormControls/KodlamaioTextInput";

export default function ProductAdd() {

    const initialValues = { productName: "", unitPrice: 1 }

    const schema = Yup.object({
        productName: Yup.string().required("Zorunlu alan*"),
        unitPrice: Yup.number().required("Zorunlu alan*"),
    });


    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className="ui form">
                    <KodlamaioTextInput name="productName" placeholder="Ürün adı" />
                    <KodlamaioTextInput name="unitPrice" placeholder="Ürün fiyatı" />
                    <Button inverted color='green' type='submit'>
                        Ekle
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}
