import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import Signin from './pages/auth/Signin';
import { Provider } from 'react-redux';
import Index from './pages/Index';
import ProtectedOne from './routes/private/ProtectedOne';
import { Toaster } from 'react-hot-toast';
import ErrorPage from './components/common/ErrorPage';
import { store } from './store/Store';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route element={<ProtectedOne />}>
          <Route path='*' element={<App />} />
        </Route>
        <Route path='/' element={<Index />} />
        <Route path='/access/error' element={<ErrorPage />} />
        <Route path='/admin/signin' element={<Signin />} />
      </Routes>
    </Router>
    <Toaster
      position='top-center'
      reverseOrder={false}
      gutter={10}
    />
  </Provider>
);
reportWebVitals();
