<<<<<<< HEAD
import HomePage from '../pages/HomePage/HomePage';
import OrderPage from '../pages/OrderPage/OrderPage';
import ProductsPage from '../pages/ProductsPage/ProductsPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import AdminPage from '../pages/AdminPage/AdminPage';
import PaymentPage from '../pages/PaymentPage/PaymentPage';
import OrderSuccess from '../pages/OrderSuccess/OrderSuccess';
import MyOrderPage from '../pages/MyOrder/MyOrder';
import DetailsOrderPage from '../pages/DetailsOrderPage/DetailsOrderPage';

export const routes = [
  {
    path: '/',
    page: HomePage,
    isShowHeader: true
  },
  {
    path: '/order',
    page: OrderPage,
    isShowHeader: true
  },
  {
    path: '/my-order',
    page: MyOrderPage,
    isShowHeader: true
  },
  {
    path: '/details-order/:id',
    page: DetailsOrderPage,
    isShowHeader: true
  },
  {
    path: '/payment',
    page: PaymentPage,
    isShowHeader: true
  },
  {
    path: '/orderSuccess',
    page: OrderSuccess,
    isShowHeader: true
  },
  {
    path: '/products',
    page: ProductsPage,
    isShowHeader: true
  },
  {
    path: '/product/:type',
    page: TypeProductPage,
    isShowHeader: true
  },
  {
    path: '/sign-in',
    page: SignInPage,
    isShowHeader: false
  },
  {
    path: '/sign-up',
    page: SignUpPage,
    isShowHeader: false
  },
  {
    path: '/product-details/:id',
    page: ProductDetailsPage,
    isShowHeader: true
  },
  {
    path: '/profile-user',
    page: ProfilePage,
    isShowHeader: true
  },
  {
    path: '/system/admin',
    page: AdminPage,
    isShowHeader: false,
  },
  {
    path: '*',
    page: NotFoundPage,
  }
];
=======
const UserRouter = require('./UserRouter');
const ProductRouter = require('./ProductRouter');
const OrderRouter = require('./OrderRouter');
const PaymentRouter = require('./PaymentRouter');

const routes = (app) => {
  app.use('/api/user', UserRouter);
  app.use('/api/product', ProductRouter);
  app.use('/api/order', OrderRouter);
  app.use('/api/payment', PaymentRouter);
}

module.exports = routes;
>>>>>>> a043e0286a9e60b3252334033f59332ab987d9df
