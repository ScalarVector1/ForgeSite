import './CharacterGallery.css';
import '../App.css';
import CharacterCard from '../Components/CharacterCard';
import { useNavigate } from 'react-router-dom';

export default function CharacterGallery() {

  const navigate = useNavigate();
  
  // Builds out a set of profile cards based on the profile JSON files present
  const r = require.context('../Profiles/', false, /\.(json)$/);
  const profileKeys = r.keys();
  const profiles = profileKeys.map(r)
  const cards = [];

  for (const index in profiles) {
    const profile = profiles[index];
    const key = profileKeys[index].match(/\/([^/]+)\.[^.]+$/)[1];

    // We explicitly dont create one for the error page
    if (key === "sample"){
      continue;
    }

    cards.push(
      <CharacterCard profile={profile} path={key}/>
    );
  }

  return (
    <div>

      <div className="GalleryButtons">

        <div className="GalleryButton" onClick={() => navigate("/about")}>
          About  
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
          {cards}
        </div>
      </div>
      </div>
  );
}
