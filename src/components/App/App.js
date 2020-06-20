import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "components/Nav/Nav";
import Cart from "components/Cart/Cart";
import Main from "components/Main/Main";
import Item from "components/Item/Item";
import data from "./MOCK_DATA.json";

class App extends Component {
    constructor() {
        super();
        this.state = {
            products: data,
        };
        this.renderFoodDetail = this.renderFoodDetail.bind(this);
        // bind() 함수를 통해 관계 설정
    }

    renderFoodDetail() {
        return this.state.products.map((product) => {
            return (
                <Route
                    exact
                    path={`/item/${product.id}`}
                    render={(props) => {
                        return (
                            <div>
                                asd
                                {/* <Item
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    id={product.id}
                                    key={product.id}
                                /> */}
                            </div>
                        );
                    }}
                />
            );
        });
    }

    componentDidMount() {
        console.log(this.state.products);
    }

    render() {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => {
                            return <Main products={this.state.products} />;
                        }}
                    />
                    {this.renderFoodDetail()}
                </Switch>
            </div>
        );
    }
}

export default App;
