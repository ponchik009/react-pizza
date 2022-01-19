import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;

/*
connect - High-Order Component (компонент высшего порядка)
оборачиваем в коннект, тем самым передавая в App 
state и dispatch как пропсы

export default connect(
  (state) => {
    return {
      items: state.pizzas.items,
    };
  },
  (dispatch) => {
    return {
      setPizzas: (items) => dispatch(setPizzas(items)),
    };
  }
)(App);
*/
