import React from 'react';
import styles from './Product.module.scss';
import {useParams} from "react-router";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import actions from "../../../service/cart/actions";
import connect from "react-redux/lib/connect/connect";
import {Link} from "react-router-dom";

const Product = ({products,categories}) => {
    const { id } = useParams();

    return(
        <Container>
            <Row className="justify-content-md-center mt-4">
                <h2>Shop</h2>
            </Row>
            <Row>
                {products.products.filter((product) =>
                    product.id == id
                ).map((product,index) =>{
                    return(
                        <Col key={index} >
                            <Card className="mb-4">
                                <Link to={"/product/"+product.id}>
                                    <Card.Img className={styles.CardImage} variant="top" src={product.image} />
                                </Link>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        Price: {product.price} PLN
                                        <br/>
                                        Category: {categories.categories.filter((category) => category.id === product.category)[0].name}
                                        <br/>
                                        {product.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    categories: state.categories,
    products: state.products,
})

const mapDispatchToProps = dispatch => ({
    add: (product) => dispatch(actions.add(product))
})

export default connect(mapStateToProps, {})(Product);



