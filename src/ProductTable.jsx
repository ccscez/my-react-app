import React from 'react';

export default class FilterableProductTable extends React.Component {
    constructor(props){
        super(props);
        this.onKeywordChange = this.onKeywordChange.bind(this);
        this.onCheckChange = this.onCheckChange.bind(this);
        this.state = { keyword: '', searchOnlyInStock: false };
    }

    onKeywordChange(value) {
        this.setState({ keyword: value})
    }
    onCheckChange(value) {
        this.setState({ searchOnlyInStock: value})
    }

    render() {
        const products = [
          {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
          {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
          {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
          {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
          {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
          {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];
        return (
            <div className="product-table-container">
                <h1>Test Product Table Filter</h1>
                <SearchBar keyword={this.state.keyword} searchOnlyInStock={this.state.searchOnlyInStock} onKeywordChange={this.onKeywordChange} onCheckChange={this.onCheckChange}/>
                <ProductTable products={products} keyword={this.state.keyword} searchOnlyInStock={this.state.searchOnlyInStock} />
            </div>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.onKeywordChange = this.onKeywordChange.bind(this);
        this.onCheckChange = this.onCheckChange.bind(this);
    }
    onKeywordChange (event) {
        this.props.onKeywordChange(event.target.value);
    }
    onCheckChange (event) {
        this.props.onCheckChange(event.target.checked);
    }
    render() {
        return (
            <form>
                <input type="text" placeholder="Search..." value={this.props.keyword} onChange={this.onKeywordChange}/>
                <p>
                    <input type="checkbox" value="1" onChange={this.onCheckChange} checked={this.props.searchOnlyInStock}/>
                    Only show products in stock
                </p>
            </form>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        let rows = [];
        let lastCategory = null;
        this.props.products.forEach((product, index) => {

            if(
                product.name.indexOf(this.props.keyword) === -1
                || (this.props.searchOnlyInStock && !product.stocked)
            ) {
                return;
            }

            if (lastCategory != product.category) {
                rows.push(<ProductCategoryRow key={product.category} category={product.category} />);
                lastCategory = product.category;
            }
            rows.push(<ProductRow key={index} product={product} />);
        });
        return (
            <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}

class ProductCategoryRow extends React.Component {
    render() {
        return (
            <tr>
                <td colSpan="2" >{this.props.category}</td>
            </tr>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        let name = this.props.product.stocked
                        ? this.props.product.name
                        : <span style={{ color: 'red' }} >{this.props.product.name}</span>;
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
}
