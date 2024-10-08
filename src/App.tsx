import Header from './components/common/Header';
import Switcher from './components/common/Switcher';
import Sidebar from './components/common/Sidebar';
import BackOnTop from './components/common/BackOnTop';
import AllRoutes from './routes/AllRoutes';
import Loader from './components/Loader';
import { useSelector } from 'react-redux';
import { RootState } from './store/Store';
import { isCategoryLoading, isProductLoading } from './util/loading';

const App = (): JSX.Element => {
  const category = useSelector((state: RootState) => state.categorySlice);
  const product = useSelector((state: RootState) => state.productSlice);

  const LOADING = isCategoryLoading(category) || isProductLoading(product);

  return (
    <>
      {/* Loader */}
      <Loader
        loading={LOADING}
      />

      <div className="wrapper">
        {/*  Top header */}
        <Header />

        {/* Switcher */}
        <Switcher />

        {/* Sidebar */}
        <Sidebar />

        {/* AllRoutes */}
        <AllRoutes />

        {/* Back To Top Button */}
        <BackOnTop />
      </div>
    </>
  );
};

export default App;
