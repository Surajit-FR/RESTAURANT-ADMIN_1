import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import Signin from './pages/auth/Signin';
import { Provider } from 'react-redux';
import { Store } from './services/store/Store';
import Index from './pages/Index';
import ProtectedOne from './routes/private/ProtectedOne';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={Store}>
    <Router>
      <Routes>
        <Route element={<ProtectedOne />}>
          <Route path='*' element={<App />} />
        </Route>
        <Route path='/' element={<Index />} />
        <Route path='/admin/signin' element={<Signin />} />
      </Routes>
    </Router>
  </Provider>
);
reportWebVitals();
