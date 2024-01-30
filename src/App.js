import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterGallery from "./Pages/CharacterGallery";
import BioPage from "./Pages/BioPage";
import sampleProfile from "./Profiles/Sample.json"

export default function App() {
  return (
    <>
      <div className="Background"></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterGallery />}/>
          <Route path="/bio/sample" element={<BioPage profile={sampleProfile}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}