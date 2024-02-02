import { useNavigate } from 'react-router-dom';
import './CharacterCard.css';

export default function CharacterCard(props)
{
    const navigate = useNavigate();

    const iconElements = [];

    for (const image in props.profile.Tags) {

        // Limit cards to the first 4 tags
        if (image >= 4) {
            break;
        }

        iconElements.push(
        <img 
            className="CharacterCardIcon" 
            src={props.profile.Tags[image].Image}
            alt="Character Icon"/>);
    }

    return (
        <div className="CharacterCardBody" onClick={() => navigate(`/bio/${props.path}`)}>
            <img className="CharacterCardImg" src={props.profile.MainImage} alt="Character Preview"/>

            <div className="CharacterCardGlow"
                style={{
                    background: `radial-gradient(circle at center, #00000000, #00000000 50%, ${props.profile.Color})`
                }}/>

            <div className="IconContainer">
                {iconElements}
            </div>
          
            <div className="CharacterCardLabel">
                {props.profile.Name}
            </div>

        </div>
    )
}