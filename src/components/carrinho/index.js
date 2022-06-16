import React, { Component } from 'react'

// styles
import { CartContainer } from './styles';

// icons
import { BagIcon, CloseIcon } from '../../assets/icons/icons';

class Carrinho extends Component {
    state = {
        open: true
    }

    openCart = () => {
        const { open } = this.state

        this.setState({ open: !open })
    }

    render() {
        const { open } = this.state;
        const { cart, totalValue } = this.props;

        return (
            <CartContainer open={open}>
                <h3 onClick={() => this.openCart()}>
                    <BagIcon />
                    Sacola
                    <CloseIcon/>
                </h3>
                {
                    open ? 
                    (
                        <>
                            <section>
                                {
                                    cart.length > 0 ?
                                        cart 
                                    :
                                    <h2>Carrinho vazio :(</h2>
                                }
                            </section>
                            <p><b>Valor total:</b> R${totalValue}</p>
                        </>
                    )
                    :
                        <></>
                }
            </CartContainer>
        )
    }
}

export default Carrinho; 