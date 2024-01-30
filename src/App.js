import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterGallery from "./Pages/CharacterGallery";
import BioPage from "./Pages/BioPage";

export default function App() {
  return (
    <>
      <div className="Background"></div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterGallery />}/>
          <Route path="/bio/:key" element={<BioPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}