import React, {useEffect, useState} from 'react';
import styles from './NavbarComponent.module.scss';
import {Container, Navbar, Nav, Dropdown, FormControl} from "react-bootstrap";
import {BiBasket} from "react-icons/bi";

function NavbarComponent(){
    const tempBasket =[
        {
            id:1,
            name: "Scarf",
            price: 20.99
        },
        {
            id:2,
            name: "Gloves",
            price: 35.99
        },
        {
            id:3,
            name: "Shoes",
            price: 2.99
        },
    ];
    const [basket,setBasket] = useState(tempBasket);


    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">My Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/shop">Shop</Nav.Link>
                    </Nav>
                    <Nav>
                        <Dropdown>
                            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" align={{ lg: 'start' }}>
                                <div className={styles.basket}>
                                    <BiBasket/>
                                    <span className={styles.basketBadge}>
                                        {basket.length}
                                    </span>
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu as={BasketToggle}>
                                {basket.map(product =>{
                                    return(
                                        <Dropdown.Item eventKey={product.id}>{product.name} - {product.price} pln</Dropdown.Item>
                                    );

                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

NavbarComponent.propTypes = {};

NavbarComponent.defaultProps = {};

export default NavbarComponent;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    </a>
));

const BasketToggle = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);
