import './App.css';
import CharacterCard from './Components/CharacterCard';

import Firebrand from './assets/Firebrand.png';
import Holosmith from './assets/Holosmith.png';
import Daredevil from './assets/Daredevil.png';
import Spellbreaker from './assets/Spellbreaker.png';
import AshLegion from './assets/AshLegion.png';

import Sura from './assets/Sura.png';
import Deron from './assets/Deron.png';
import Trinik from './assets/Trinik.png';
import Gorrin from './assets/Gorrin.png';

function App() {
  return (
    <div className="App">
      <div className="Center">
        <CharacterCard 
          image={Sura} 
          icon={[Firebrand, AshLegion]}
          name={"Sura Forgesmasher"}
          glow={"#55AAFF"}/>
        <CharacterCard          
          image={Deron} 
          icon={[Holosmith, AshLegion]}
          name={"Deron Forgetender"}
          glow={"#FF7711"}/>
        <CharacterCard
          image={Trinik} 
          icon={[Daredevil, AshLegion]}
          name={"Trinik Forgekeeper"}
          glow={"#880044"}/>
        <CharacterCard          
          image={Gorrin} 
          icon={[Spellbreaker, AshLegion]}
          name={"Gorrin Forgerend"}
          glow={"#FFAA33"}/>
      </div>
    </div>
  );
}

export default App;
