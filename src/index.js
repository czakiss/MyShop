import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, Routes} from "react-router";
import Shop from "./components/Pages/Shop/Shop";
import Product from "./components/Pages/Product/Product";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <NavbarComponent/>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product" element={<Product />}>
                  {/*<Route path=":productId" element={<Product />} />*/}
              </Route>
              <Route path="*" element={<PageNotFound/>}/>
          </Routes>
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
