import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import ContactScreen from "./pages/ContactScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import ForgotScreen from "./pages/ForgotScreen";
import SubscriptionScreen from "./pages/SubscriptionScreen";
// import PlaySong from "./components/PlaySong";
// import SearchSongs from "./components/SearchSongs";
// import ToggleView from "./components/ToggleView";
// import DashBoard from "./components/DashBoard";

function App() {
  return (
    <>
      {/* <PlaySong /> */}
      {/* <SearchSongs /> */}
      {/* <ToggleView /> */}
      {/* <DashBoard/> */}
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="/AboutScreen" element={<AboutScreen />} />
          <Route path="/ContactScreen" element={<ContactScreen />} />
          <Route path="/LoginScreen" element={<LoginScreen />} />
          <Route path="/SignupScreen" element={<SignupScreen />} />
          <Route path="/ForgotScreen" element={<ForgotScreen />} />
          <Route path="/SubscriptionScreen" element={<SubscriptionScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
