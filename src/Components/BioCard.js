import { useRef, useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import "./BioCard.css";

export default function BioCard(props) {

    const [expanded, setExpanded] = useState("true");
    const text = useRef(null);

    text.current?.style.setProperty('--max-height', text.scrollHeight + 'px');

    return (
        <div className="Card">
            <h1 className="Title">{props.title}</h1>

            {expanded == "true" ?
                <SlArrowDown className="Arrow" onClick={() => setExpanded("false")}/> : 
                <SlArrowRight className="Arrow" onClick={() => setExpanded("true")}/>
            }

            <div className="Seperator"/>
            <div className="Text" ref={text} expanded={expanded} dangerouslySetInnerHTML={{__html: props.body}}/>

        </div>
    );
}