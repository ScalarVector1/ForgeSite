import "./BioCard.css";
import GalleryImage from "./GalleryImage";

export default function GalleryCard(props) {

    const images = [];

    for (const image in props.images) {
        images.push(
            <GalleryImage 
                src={props.images[image]}
                />
            )
    }

    return (
        <div className="Card">
            <h1 className="Title">Gallery</h1>
            <div className="Seperator"/>
            <div style={{margin:"auto"}}>
                {images}
            </div>
        </div>
    );
}