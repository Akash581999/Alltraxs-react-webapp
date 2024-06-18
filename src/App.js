import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import ContactScreen from "./pages/ContactScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import ForgotScreen from "./pages/ForgotScreen";
import DashBoardScreen from "./pages/DashBoardScreen";
import SubscriptionScreen from "./pages/SubscriptionScreen";
import NotFoundScreen from './pages/NotFoundScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="/About" element={<AboutScreen />} />
          <Route path="/Contact" element={<ContactScreen />} />
          <Route path="/Login" element={<LoginScreen />} />
          <Route path="/Signup" element={<SignupScreen />} />
          <Route path="/ForgotPassword" element={<ForgotScreen />} />
          <Route path="/DashBoard" element={<DashBoardScreen />} />
          <Route path="/Subscription" element={<SubscriptionScreen />} />
          <Route path="/NotFound" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
