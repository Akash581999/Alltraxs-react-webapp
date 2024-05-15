import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import AboutScreen from "./pages/AboutScreen";
import ContactScreen from "./pages/ContactScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import ForgotScreen from "./pages/ForgotScreen";
// import PlaySong from "./components/PlaySong";
// import SearchSongs from "./components/SearchSongs";
// import AudioPlayer from "./components/AudioPlayer";
// import SimpleMusicPlayer from "./components/SimpleMusicPlayer";

function App() {
  return (
    <>
      {/* <PlaySong /> */}
      {/* <SearchSongs /> */}
      {/* <AudioPlayer /> */}
      {/* <SimpleMusicPlayer /> */}
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomeScreen />} />
          <Route path="/AboutScreen" element={<AboutScreen />} />
          <Route path="/ContactScreen" element={<ContactScreen />} />
          <Route path="/LoginScreen" element={<LoginScreen />} />
          <Route path="/SignupScreen" element={<SignupScreen />} />
          <Route path="/ForgotScreen" element={<ForgotScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
