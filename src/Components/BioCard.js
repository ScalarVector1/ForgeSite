import { useEffect, useRef, useState } from "react";
import { SlArrowDown, SlArrowRight } from "react-icons/sl";
import "./BioCard.css";
import Markdown from "react-markdown";

export default function BioCard(props) {

    const [expanded, setExpanded] = useState("true");
    const [body, setBody] = useState("");
    const text = useRef(null);

    useEffect(() => {

        fetch(props.body).then(
                (a) => 
                {
                    a.text().then((b) => setBody(b));
                }
            );
    });

    text.current?.style.setProperty('--max-height', text.current?.scrollHeight + 'px');
    console.log(text.current)

    return (
        <div className="Card">
            <h1 className="Title">{props.title}</h1>

            <SlArrowDown className="Arrow" expanded={expanded} onClick={() => setExpanded(expanded == "true" ? "false" : "true")}/>

            <div className="Seperator"/>
            <div className="Text" ref={text} expanded={expanded}>
                <Markdown children={body}/>
            </div>

        </div>
    );
}