import React, { Component } from 'react'
import './CardProduct.css'

class CardProduct extends Component {
    state = {
        order: 4
    }

    handleCounterChange = (val) => {
        this.props.onCounterChange(val)
    }

    handlePlus = () => {

        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => { this.handleCounterChange(this.state.order) })
        }

    }

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/product/heinz+abc/Saus+Tiram+195.jpg"></img>
                </div>
                <p className="product-title"> Kecap ABC</p>
                <p className="product-price"> Rp 410.000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order}></input>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>

        )
    }
}

export default CardProduct;