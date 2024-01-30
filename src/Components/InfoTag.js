import "./InfoTag.css";

export default function InfoTag(props) {

    return (
        <div className="InfoTag">
            <img className="TagImg" src={props.icon} alt="Tag icon"/>
            <p>{props.text}</p>
        </div>
    );
}