import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import AppBar from "common/layout/AppBar";
import UsersPage from "modules/users/UsersPage";
import CatalogPage from "modules/catalog/Catalog";
import CheckoutPage from "modules/checkout/CheckoutPage";
import OrdersPage from "modules/ordermanagement/OrdersPage";

function App() {
  return (
    <Router>
      <AppBar />
      <div className="contentArea h-appContent">
        <Routes>
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="/users/*" element={<UsersPage />} />
          <Route path="/catalog/*" element={<CatalogPage />} />
          <Route path="/checkout/*" element={<CheckoutPage />} />
          <Route path="/orders/*" element={<OrdersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
