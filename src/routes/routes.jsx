import { Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import MainPage from '../pages/Main/Main';
import NotFound from '../pages/NotFound/NotFound';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<MainPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
