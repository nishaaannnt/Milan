import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  ClubLogin,
  ClubProfile,
  ShopLanding,
  ClubRegister,
  ClubsPage,
  UserRegister,
  UserLogin,
  UserProfile,
  ContactPage,
  AboutUs,
  EventCreate,
  EventsPage,
  Donate,
} from "./pages";
import MilanState from "./context/MilanState";
import ClubForgotpassword from "./pages/clubs/ClubForgotpassword";
import ClubDetailsCard from "./pages/clubs/ClubDetails";
import UserForgotpassword from "./pages/user/UserForgotpassword";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/App.css";
import ShopCategory from "./pages/shops/ShopCategory";
const App = () => {
  return (
    <>
      <MilanState>
        <ToastContainer
          position="top-right"
          autoClose={1200}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          closeButton={false}
        />
        <Router>
          <Navbar />
          <Routes>
            {/* //* Home routes */}

            <Route exact path="/" element={<Home />} />

            {/* //* Auth routes - USER*/}

            <Route exact path="/user/register" element={<UserRegister />} />
            <Route exact path="/user/login" element={<UserLogin />} />
            <Route exact path="/user/profile" element={<UserProfile />} />
            <Route
              exact
              path="/user/forgotpass"
              element={<UserForgotpassword />}
            />

            {/* //* Auth routes - CLUBS*/}

            <Route exact path="/clubs/login" element={<ClubLogin />} />
            <Route exact path="/clubs/register" element={<ClubRegister />} />
            <Route exact path="/clubs/profile" element={<ClubProfile />} />
            <Route
              exact
              path="/clubs/forgotpass"
              element={<ClubForgotpassword />}
            />

            {/* //* Display Routes */}
            <Route exact path="/clubs" element={<ClubsPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/clubs/createevent" element={<EventCreate />} />
            <Route exact path="/events" element={<EventsPage />} />
            <Route exact path="/clubs/:id" element={<ClubDetailsCard />} />

            {/* //* Donations */}
            <Route exact path="/donateus" element={<Donate />} />

            {/* //* Shop */}
            <Route exact path="/shop" element={<ShopLanding />} />
            <Route exact path="/shop/:category" element={<ShopCategory />} />
          </Routes>
          {/* <Footer /> */}
          <Footer />
        </Router>

      </MilanState>
    </>
  );
};

export default App;
