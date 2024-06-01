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
                onClick={() => 
                    {
                        if (censored)
                        {
                            setCensored(false);
                        }
                        else 
                        {
                            window.open(props.src, '_blank').focus();
                        }
                    }}
                alt="Custom gallery"/>

            <div className="Warning"
                onClick={() => setCensored(false)}>
                {censored ? "18+" : ""}
            </div>
        </div>
    )
}