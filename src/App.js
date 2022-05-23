
import React from "react";


import { Routes, Route } from "react-router";
import { Header } from "./components";
import { Home, Cart, Ready } from './pages';

function App() {

  return(
    <div className="wrapper">
      <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={ <Home />} exact/>
            <Route path="/cart" element={<Cart />} exact/>
            <Route path="/ready" element={<Ready />} exact/>
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
