import "./App.css";
import "./Responsive.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PrivateRouter from "./privateRouter";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";
import DetailsPage from "./pages/DetailsPage";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import PlaceOrderPage from "./pages/placeOrderPage";
import DashboardPage from "./pages/dashboardPage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/contacts" element={<ContactPage />} exact />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/placeorder" element={<PlaceOrderPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;
