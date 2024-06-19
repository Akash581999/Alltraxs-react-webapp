import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import ContactScreen from "./pages/ContactScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import ForgotScreen from "./pages/ForgotScreen";
import DashBoardScreen from "./pages/DashBoardScreen";
import SubscriptionScreen from "./pages/SubscriptionScreen";
import AdminPage from './pages/AdminPage';
import NotFoundScreen from './pages/NotFoundScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="/AboutScreen" element={<AboutScreen />} />
          <Route path="/ContactScreen" element={<ContactScreen />} />
          <Route path="/LoginScreen" element={<LoginScreen />} />
          <Route path="/SignupScreen" element={<SignupScreen />} />
          <Route path="/ForgotScreen" element={<ForgotScreen />} />
          <Route path="/DashBoardScreen" element={<DashBoardScreen />} />
          <Route path="/SubscriptionScreen" element={<SubscriptionScreen />} />
          <Route path="/AdminPage" element={<AdminPage />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
