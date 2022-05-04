
import React from "react";
import axios from 'axios';
import {useDispatch} from 'react-redux';

import { Routes, Route } from "react-router";
import { Header } from "./components";
import { Home, Cart } from './pages';
import { setPizzas } from './redux/action/pizzas'

function App() {
  const dispatch = useDispatch();
  
  React.useEffect(()=> {
    //Перенести в redux и подключить redux-thunk.
    //следить за фильтрацией и сортировкой.
    //Сделать загрузку *имитация.
    axios.get('http://localhost:3004/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    //setPizzas(data.pizzas);
    });
  }, []);

  return(
    <div className="wrapper">
      <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Home />} exact/>
            <Route path="/cart" element={<Cart />} exact/>
          </Routes>
        </div>
      </div>
  )
}
export default App;

// const mapStateToPorps = (state) => {
//   return { 
//     items: state.pizzas.items,
//   }
// };/*Нужен для того, чтобы из всего хранилища вытащить конкретные данные и пропихнуть их в props */

// const mapDispatchToPorps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   };
// };/*Нужен для того, чтобы из пропихнуть в props этого компонента определенный Action*/


//export default connect(mapStateToPorps, mapDispatchToPorps)(App);
