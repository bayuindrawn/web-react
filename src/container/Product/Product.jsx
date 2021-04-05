import React, { Component, Fragment } from 'react';
import './Product.css';

class Product extends Component {
    state = {
        order: 4
    }
    handlePlus = () => {

    }

    handleMinus(){
        
    }
    render(){
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="https://info.etanee.id/wp-content/uploads/2020/06/Logo-etanee-LEAF-GREEN-500px.png" alt="logo_app"/>
                    </div>
                    <div className="troley">
                        <img src="https://img.icons8.com/pastel-glyph/2x/shopping-cart--v2.png" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://asset.kompas.com/crops/srL9I7Wc1abgNLuVnnJWnSOygqc=/0x0:1000x667/750x500/data/photo/2020/09/19/5f66069a13718.jpg" alt="product_image"/>
                        <p className="product-title">Daging ayam berbumbu rasa original plus tepung crispy |1 Karton - 10 Pack|</p>
                        <p className="product-price"> Rp 410.000</p>
                        <div className="counter">
                            <button className="minus">-</button>
                            <input className="text-count" type="text" value={this.state.order}/>
                            <button className="plus">+</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Product;