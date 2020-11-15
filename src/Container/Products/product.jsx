import React, { Component } from 'react'
import CardProduct from '../CardProducts/CardProduct'
import './product.css'

class Product extends Component {
    state = {
        order: 4
    }

    handleCtrChange=(newVal)=>{
        this.setState({
            order:newVal
        })
    }
   

    render() {
        return (
            <div>
                <div className="header">
                    <div className="logo">
                        <img src="../images/etanee.png"></img>
                    </div>
                    <div className="troley img">
                        <img src="../images/shopping_cart.png"></img>
                        <div className="count">{this.state.order}</div>
                    </div>


                </div>
                <CardProduct onCounterChange={(value)=>this.handleCtrChange(value)}/>
            </div>




        )
    }
}

export default Product;