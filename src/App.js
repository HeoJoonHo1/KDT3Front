import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import "./layout.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PostCode from "./components/PostCode";
import "bootstrap/js/dist/tooltip.js";
import "bootstrap/js/dist/dropdown.js";
import "bootstrap/js/dist/modal.js";
import "bootstrap/dist/css/bootstrap.css";
import Csr from "./components/naver/Csr";
import Cfr from "./components/naver/Cfr";
import AxiosTest from "./components/AxiosTest";
import Tts from "./components/naver/Tts";
import Ocr from "./components/naver/Ocr";
import Chatting from "./components/Chatting";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <nav className="navbar navbar-expand-md navbar-dark bg-info sticky-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbar-content">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/axios">
                    axios Test
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/post">
                    POST CODE
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/csr">
                    CSR(stt)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tts">
                    TTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cfr">
                    CFR
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ocr">
                    OCR
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/alert">
                    SweetAlert
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/chatting">
                    채팅방
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/axios" element={<AxiosTest />} />
            <Route path="/post" element={<PostCode />} />
            <Route path="/csr" element={<Csr />} />
            <Route path="/cfr" element={<Cfr />} />
            <Route path="/tts" element={<Tts />} />
            <Route path="/ocr" element={<Ocr />} />

            <Route path="/alert" element={<Alert />} />
            <Route path="/chatting" element={<Chatting />} />

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
