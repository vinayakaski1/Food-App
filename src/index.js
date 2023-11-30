import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Header from './Components/Header';
import Body from './Components/Body';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import RestaurantMenu from './Components/RestaurantMenu';

import Footer from './Footer';
import Login from './Components/Login';

import appStore, { persistor } from './utils/appStore';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="relative min-h-[100vh]">
            <Header />
            <Routes>
              <Route
                path="*"
                element={
                  <PrivateRoute>
                    <Body />
                  </PrivateRoute>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/restaurant/:resId"
                element={
                  <PrivateRoute>
                    <RestaurantMenu />
                  </PrivateRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
