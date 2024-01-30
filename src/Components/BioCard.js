import "./BioCard.css";

export default function BioCard(props) {

    return (
        <div className="Card">
            <h1 className="Title">{props.title}</h1>
            <div className="Seperator"/>
            <div className="Text" dangerouslySetInnerHTML={{__html: props.body}}/>
        </div>
    );
}