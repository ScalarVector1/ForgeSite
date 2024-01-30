import './CharacterGallery.css';

import '../App.css';
import CharacterCard from '../Components/CharacterCard';

import Firebrand from '../assets/Firebrand.png';
import Holosmith from '../assets/Holosmith.png';
import Daredevil from '../assets/Daredevil.png';
import Spellbreaker from '../assets/Spellbreaker.png';
import AshLegion from '../assets/AshLegion.png';
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
          icon={[Holosmith, AshLegion]}
          name={"Deron Forgetender"}
          glow={"#FF7711"}
          path={"deron"}/>
        <CharacterCard
          image={"../../images/Trinik.png"} 
          icon={[Daredevil, AshLegion]}
          name={"Trinik Forgekeeper"}
          glow={"#880044"}
          path={"trinik"}/>
        <CharacterCard          
          image={"../../images/Gorrin.png"} 
          icon={[Spellbreaker, AshLegion]}
          name={"Gorrin Forgerend"}
          glow={"#FFAA33"}
          path={"gorrin"}/>
        </div>
      </div>
      </div>
  );
}
