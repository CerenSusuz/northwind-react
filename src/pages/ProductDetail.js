import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card, Image, Comment, Form, Header, Rating, Icon } from 'semantic-ui-react'
import ProductService from "../services/productService";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions'
import { toast } from 'react-toastify';

export default function ProductDetail() {

  const dispatch = useDispatch()

  let { productName } = useParams();

  const [product, setProduct] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepetinize eklendi!`)
  }

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
            <Rating defaultRating={3} maxRating={5} disabled />
            <Card.Description><strong>{product.unitPrice} TL</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button animated='vertical' onClick={() => handleAddToCart(product)}>
                <Button.Content visible>
                  <Icon name='shop' />
                </Button.Content>
                <Button.Content hidden>Ekle</Button.Content>
              </Button>
            </div>
          </Card.Content>

          <Card.Content extra>
            <Comment.Group minimal>
              <Header as='h3' dividing>
                Yorumlar
              </Header>

              <Comment>
                <Comment.Avatar as='a' src='https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png' />
                <Comment.Content>
                  <Comment.Author as='a'>Ay??e</Comment.Author>
                  <Comment.Metadata>
                    <span>Yesterday at 12:30AM</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>m??kemmel</p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Link>Reply</Link>
                  </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                  <Comment>
                    <Comment.Avatar as='a' src='https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png' />
                    <Comment.Content>
                      <Comment.Author as='a'>Fatma</Comment.Author>
                      <Comment.Metadata>
                        <span>Just now</span>
                      </Comment.Metadata>
                      <Comment.Text>??ok iyi :)</Comment.Text>
                      <Comment.Actions>
                        <Link>Reply</Link>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                <Comment.Avatar as='a' src='https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-4-avatar-2754580_120522.png' />
                <Comment.Content>
                  <Comment.Author as='a'>Hayriye</Comment.Author>
                  <Comment.Metadata>
                    <span>5 days ago</span>
                  </Comment.Metadata>
                  <Comment.Text>bay??ld??mm</Comment.Text>
                  <Comment.Actions>
                    <Link>Reply</Link>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <Button size='mini' content='Yorum Ekle' labelPosition='left' icon='edit' primary />
              </Form>
            </Comment.Group>
          </Card.Content>

        </Card>
      </Card.Group>
    </div>

  );
}