import React from 'react';
import styles from './NavbarComponent.module.scss';
import {Container, Navbar, Nav, Dropdown, Button, FormControl,DropdownButton} from "react-bootstrap";
import {BiBasket,BiMinus} from "react-icons/bi";
import actions from "../../service/cart/actions";
import connect from "react-redux/lib/connect/connect";

const NavbarComponent = ({cart,products,remove}) => {

    const removeProductFromCart = (product) => {
       remove(product)
    }

    const CartToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
            title="show cart"
        >
            {children}
        </a>
    ));

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">My Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Dropdown align="end" >
                            <Dropdown.Toggle as={CartToggle}>
                                <div className={styles.cart}>
                                    <BiBasket/>
                                    <span className={styles.cartBadge}>
                                        {cart.cart.length}
                                    </span>
                                </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>

                                {
                                    cart.cart.length <= 0 ?
                                        <div className={styles.cartCard}>
                                            <div className={styles.cartProductEmpty}>Empty cart</div>
                                        </div> :
                                        cart.cart.map((cartProduct,index) =>{
                                            const product = products.products.filter((product) => product.id === cartProduct.id)[0];
                                            return(
                                                <li key={index} className={styles.cartCard}>
                                                    <div className={styles.cartProduct}>
                                                        <span className={styles.cartProductName}>{product.name}</span>
                                                        <span>{product.price} pln</span>
                                                        <Button
                                                            size="sm"
                                                            variant="danger"
                                                            onClick={() => {removeProductFromCart(index)}}
                                                        >
                                                            <BiMinus/>
                                                        </Button>
                                                    </div>

                                                </li>
                                            )
                                        })
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const mapStateToProps = (state) => ({
    cart: state.cart,
    products: state.products,
})

const mapDispatchToProps = dispatch => ({
    remove: (product) => dispatch(actions.remove(product))
})

export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent);


