import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/others/Dashboard';
import AllProducts from '../pages/others/AllProducts';

const AllRoutes = (): JSX.Element => {
    return (
        <>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/all/products' element={<AllProducts />} />
            </Routes>
        </>
    );
};

export default AllRoutes;