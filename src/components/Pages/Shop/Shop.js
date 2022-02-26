import React, {useState} from 'react';
import styles from './Shop.module.scss';
import {Button, Card, Col, Container, Row, Form} from "react-bootstrap";
import actions from "../../../service/cart/actions";
import connect from "react-redux/lib/connect/connect";
import {Link} from "react-router-dom";

const Shop = ({categories,products,add}) => {

    const [searchInput,setSearchInput] = useState("")
    const [selectCategory, setSelectCategory] = useState("all")
    const [minPrice,setMinPrice] = useState(0)
    const [maxPrice,setMaxPrice] = useState(Math.max.apply(Math,products.products.map((product) =>{return product.price})))
    const [sort,setSort] = useState(0)


    const addToCart = (product) => {
        add(product)
    }

    return(
        <Container>
            <Row className="justify-content-md-center mt-4">
                <h2>Shop</h2>
            </Row>
            <Form className="mb-3">
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formSearch">
                            <Form.Label>Search product</Form.Label>
                            <Form.Control onChange={e => setSearchInput(e.target.value)} type="text" placeholder="Enter product's name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formMinPrice">
                            <Form.Label>Min price</Form.Label>
                            <Form.Control onChange={e => setMinPrice(e.target.value)} defaultValue={minPrice} type="number" placeholder="Enter min price" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formMaxPrice">
                            <Form.Label>Max price</Form.Label>
                            <Form.Control onChange={e => setMaxPrice(e.target.value)} defaultValue={maxPrice} type="number" placeholder="Enter max price" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Select onChange={e => setSelectCategory(e.target.value)}>
                                <option value="all">All</option>
                                {categories.categories.map((category,index) => {
                                        return(
                                            <option value={category.id} key={index}>{category.name}</option>
                                        )
                                    })}
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Button  variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Row>
                {products.products.filter((product) => {
                    if(
                        (selectCategory === "all" || selectCategory == product.category) &&
                        (product.price >= minPrice) && (product.price <= maxPrice) &&
                        (product.name.toLowerCase().includes(searchInput.toLowerCase()) || searchInput === "")
                    ){
                        return product
                    }
                }).map((product,index) =>{
                return(
                    <Col  key={index} lg="3" md="4" xs="12">
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
                                </Card.Text>
                                <Button onClick={() => {addToCart(product)}}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
            </Row>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    categories: state.categories,
    products: state.products,
})

const mapDispatchToProps = dispatch => ({
    add: (product) => dispatch(actions.add(product))
})

export default connect(mapStateToProps,mapDispatchToProps)(Shop);


