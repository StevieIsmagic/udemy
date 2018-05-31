import React, { Component } from 'react';

class Product extends Component {
  state = {
    qty: 0
  };

  buy() {
    this.setState({qty: this.state.qty + 1});
    this.props.handleTotal(this.props.price)
    alert('You bought and android')
  }

  show() {
    this.props.handleShow(this.props.name);
  }

  render() {
    return (
      <div>
        <h2>Hello from Stevie</h2>
        <h2>{this.props.name} - ${this.props.price}</h2>
        <button onClick={this.buy}> Buy </button>
        <button onClick={this.show}> Show </button>
        <h3> Qty: {this.state.qty} items </h3>
        <hr/>
      </div>
    );
  }
}

class Total extends Component {
  render() {
    return (
      <div>
        <h3> Total Cash: {this.props.total}</h3>
      </div>
    );
  }
};

class ProductList extends Component {
  constructor(props) {
    super(props);
  
    let state = {
        total: 0,
        productList: [
          {name: 'android', price: 121},
          {name: 'apple', price: 221},
          {name: 'nokia', price: 165},
        ]
      };
  }

  calculateTotal(price) {
    this.setState({total: this.state.total + price});
  }

  showProduct(name){
    alert('You Selected' + name);
  }

  render(){
    let component = this;
    var products = this.state.productList.map((product, i) => {
      return (
        <Product 
          key={i}
          name={product.name} 
          price={product.price} 
          handleShow={component.showProduct}
          handleTotal={component.calculateTotal}
        />
      );
    })

    return (
      <div>
        {products}
        <Total total={this.state.total}/>
      </div>
    )
  }
}

// React.render(<ProductList />, document.getElementById('root'));
export default ProductList;