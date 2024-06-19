import {
  Route,
  Routes
} from 'react-router-dom';
import pages from './utils/pages.js';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings/index.js';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBookings';
import UnderConstruction from './components/pages/Construction';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route
            path={pages.get('confirmedBooking').path}
            element={<ConfirmedBooking />}
          />
          <Route
            path={pages.get('about').path}
            element={<UnderConstruction />}
          />
          <Route
            path={pages.get('menu').path}
            element={<UnderConstruction />}
          />

          {/*<Route
            path={pages.get('about').path}
            element={<UnderConstruction />}
          />
           <Route
            path={pages.get('menu').path}
            element={<UnderConstruction />}
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route
            path={pages.get('confirmedBooking').path}
            element={<ConfirmedBooking />}
          />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </>
  );
};

export default App;