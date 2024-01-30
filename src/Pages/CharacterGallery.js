import './CharacterGallery.css';
import '../App.css';
import CharacterCard from '../Components/CharacterCard';
import { useNavigate } from 'react-router-dom';

export default function CharacterGallery() {

  const navigate = useNavigate();

  return (
    <div>

      <div className="GalleryButtons">

        <div className="GalleryButton" onClick={() => navigate("/about")}>
          About  
        </div>

        <div className="GalleryButton" onClick={() => navigate("/faq")}>
          FAQ  
        </div>

        <div className="GalleryButton" onClick={() => navigate("/contact")}>
          Contact  
        </div>

        <a href={"https://github.com/ScalarVector1/ForgeSite"}>
          <div className="GalleryButton">
            Source  
          </div>
        </a>
        
      </div>

      <div className="Center">
        <div className="Inner">
        <CharacterCard 
          image={"../../images/Sura.png"} 
          icon={["../../images/Firebrand.png", "../../images/AshLegion.png"]}
          name={"Sura Forgesmasher"}
          glow={"#55AAFF"}
          path={"sura"}/>
        <CharacterCard          
          image={"../../images/Deron.png"} 
          icon={[ "../../images/Holosmith.png",  "../../images/AshLegion.png"]}
          name={"Deron Forgetender"}
          glow={"#FF7711"}
          path={"deron"}/>
        <CharacterCard
          image={"../../images/Trinik.png"} 
          icon={[ "../../images/Daredevil.png",  "../../images/AshLegion.png"]}
          name={"Trinik Forgekeeper"}
          glow={"#880044"}
          path={"trinik"}/>
        <CharacterCard          
          image={"../../images/Gorrin.png"} 
          icon={[ "../../images/Spellbreaker.png",  "../../images/AshLegion.png"]}
          name={"Gorrin Forgerend"}
          glow={"#FFAA33"}
          path={"gorrin"}/>
        </div>
      </div>
      </div>
  );
}
