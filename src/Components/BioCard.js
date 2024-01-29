import "./BioCard.css";

export default function BioCard(props) {

    return (
        <div className="Card">
            <h1 className="Title">{props.title}</h1>
            <div className="Seperator"/>
            <p className="Text">{props.body}</p>
        </div>
    );
}