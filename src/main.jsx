import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/404'
import LoginPage from './pages/auth/login'
import DetailProduct from './components/fragments/product/detailProduct'
import HomePage from './pages/home'
import { Provider } from 'react-redux'
import store from './redux/store/store'
import ProductPage from './pages/product'
import CartPage from './pages/cart'
import ThanksCard from './pages/404/thanksCard'

const LoggedIn = () => {
  return !!localStorage.getItem('token')
}

const PrivateRoute = ({ children }) => {
  return LoggedIn() ? children : <Navigate to='/login' />
}

const BackLogin = ({ children }) => {
  return LoggedIn() ? <Navigate to='/' /> : children
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/login',
    element: <BackLogin><LoginPage /></BackLogin>,
    errorElement: <ErrorPage />
  },
  {
    path: '/product/:id',
    element: <PrivateRoute><DetailProduct /></PrivateRoute>,
    errorElement: <ErrorPage />
  },
  {
    path: '/product',
    element: <PrivateRoute><ProductPage /></PrivateRoute>,
    errorElement: <ErrorPage />
  },
  {
    path: '/cart',
    element: <PrivateRoute><CartPage /></PrivateRoute>,
    errorElement: <ErrorPage />
  },
  {
    path: '/thanks',
    element: <PrivateRoute><ThanksCard /></PrivateRoute>,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
