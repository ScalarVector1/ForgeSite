export default function CharacterCard(props)
{
    const iconElements = [];

    for (const image in props.icon) {
        iconElements.push(
        <img 
            className="CharacterCardIcon" 
            src={props.icon[image]}/>);
    }

    return (
        <div className="CharacterCardBody">
            <img className="CharacterCardImg" src={props.image}/>

            <div className="CharacterCardGlow"
                style={{
                    background: `radial-gradient(circle at center, #00000000, #00000000 50%, ${props.glow})`
                }}/>

            <div className="IconContainer">
                {iconElements}
            </div>
          
            <div className="CharacterCardLabel">
                {props.name}
            </div>

        </div>
    )
}