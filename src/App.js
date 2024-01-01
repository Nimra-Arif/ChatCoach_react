import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import Terms from "./Pages/Terms";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Help from "./Pages/Help";
import About from "./Pages/About";
import Confirmation from "./Pages/Confirmation";
import Subscription from "./Pages/Subscription";
// import 'animate.css';
import "animate.css/animate.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/join" element={<Login />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/helpcenter" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
