import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { BurgerMenu } from "./components/BurgerMenu";
import { Header } from "./components/Header";
import { store } from "./redux/redux-store";
import { Router } from "./Router";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <BurgerMenu />
          <Router />
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
