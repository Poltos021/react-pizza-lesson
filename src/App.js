
import React from "react";
import axios from 'axios';
import {connect} from 'react-redux';

import { Routes, Route } from "react-router";
import { Header } from "./components";
import { Home, Cart } from './pages';
import { setPizzas } from './redux/action/pizzas'

/*
function App() {

  React.useEffect(() => {
    
  }, []);

  return;
}
*/
class App extends React.Component{

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
    this.props.setPizzas(data.pizzas);
    });
  }
  
  render() {
    return (
      <div className="wrapper">
      <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={this.props.items}/>} exact/>
            <Route path="/cart" element={<Cart />} exact/>
          </Routes>
        </div>
      </div>
    );;
  }
}

const mapStateToPorps = (state) => {
  return { 
    items: state.pizzas.items,
  }
};
/*Нужен для того, чтобы из всего хранилища вытащить конкретные данные и пропихнуть их в props */

const mapDispatchToPorps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  };
};
/*Нужен для того, чтобы из пропихнуть в props этого компонента определенный Action*/


export default connect(mapStateToPorps, mapDispatchToPorps)(App);
