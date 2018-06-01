import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: 0
    }
    
    this.buy = this.buy.bind(this);
    this.show = this.show.bind(this);
  }

  buy() {
    this.setState({qty: this.state.qty + 1});
    this.props.handleTotal(this.props.price)
    // alert(`You bought an ${this.props.name}`)
  }

  show() {
    this.props.handleShow(this.props.name);
  }

  render() {
    return (
      <div>
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
        <h3> Total Cash: ${this.props.total}</h3>
      </div>
    );
  }
};

class ProductForm extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    
    let product = {
      name: this.refs.name.value,
      price: parseInt(this.refs.price.value, 10)
    }

    this.props.handleCreate(product);

    this.refs.name.value = "";
    this.refs.price.value = "";
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <input type='text' placeholder='Product Name' ref='name'/>
        <input type='text' placeholder='Product Price' ref='price' />
        <br/><br/>
        <button> Create Poduct </button>
        <hr/>
      </form>
    )
  }
}

class ProductList extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        total: 0,
        productList: [
          {name: 'Android', price: 121},
          {name: 'Apple', price: 221},
          {name: 'Nokia', price: 165},
        ]
      }
    this.calculateTotal = this.calculateTotal.bind(this);
    this.showProduct = this.showProduct.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  createProduct(product) {
    this.setState({ productList: this.state.productList.concat(product) })
  }

  calculateTotal(price) {
    this.setState({total: this.state.total + price});
  }

  showProduct(name){
    alert('You Selected ' + name);
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
        <h2><em>Product List - Cell Phones WholeSale</em></h2>
        <ProductForm handleCreate={this.createProduct}/>
        {products}
        <Total total={this.state.total}/>
      </div>
    )
  }
}

// React.render(<ProductList />, document.getElementById('root'));
export default ProductList;