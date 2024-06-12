import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.jsx";
import { Home } from "./pages/home/Home.jsx";
import {Footer} from "./components/Footer.jsx";
import {Business_content} from "./pages/business_content/Business_content.jsx";
import {CompanyInfo} from "./pages/company_info/CompanyInfo.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business-content" element={<Business_content />} />
        <Route path="/company-info" element={<CompanyInfo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
