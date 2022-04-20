import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { store } from "./redux/redux-store";
import { Router } from "./Router";
import "./global.scss"
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main>
          <Router />
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
