import { useState } from "react";
import "./GalleryImage.css";

export default function GalleryImage(props) {

    const [censored, setCensored] = useState(props.censored);

    return (
        <div className="Container">
            <img 
                className="Image"
                style={{filter: censored ? "blur(20px)" : ""}} 
                src={props.src}
                onClick={() => setCensored(false)}/>

            <div className="Warning"
                onClick={() => setCensored(false)}>
                {censored ? "Hidden" : ""}
            </div>
        </div>
    )
}