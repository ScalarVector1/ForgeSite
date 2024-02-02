import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterGallery from "./Pages/CharacterGallery";
import BioPage from "./Pages/BioPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

export default function App() {
  return (
    <>
      <div className="Background"></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterGallery />}/>
          <Route path="/bio/:key" element={<BioPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}