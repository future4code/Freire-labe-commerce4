import React, { Component } from 'react'

// styles
import { CartContainer } from './styles';

// icons
import { BagIcon, CloseIcon } from '../../assets/icons/icons';

class Carrinho extends Component {

    render() {
        const { open } = this.props;
        const { cart, totalValue } = this.props;

        return (
            <CartContainer open={open}>
                <h3 onClick={this.props.openCart}>
                    <BagIcon open={open}/>
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