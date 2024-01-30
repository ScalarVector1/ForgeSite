import InfoTag from "../Components/InfoTag";
import "./BioPage.css";
import BioCard from "../Components/BioCard";
import GalleryCard from "../Components/GalleryCard";

export default function BioPage(props) {

    const tags = [];
    for(const index in props.profile.Tags) {
        const tag = props.profile.Tags[index];
        tags.push(<InfoTag icon={tag.Image} text={tag.Text}/>)
    }

    const cards = [];
    for(const index in props.profile.Cards) {
        const card = props.profile.Cards[index];
        cards.push(<BioCard title={card.Title} body={card.Body}/>)
    }

    return (
        <>
            <div className="Topbar">
                <h1>{props.profile.Name}</h1>
                <div className="Tagbox">
                    {tags}
                </div>
            </div>

            <div className="Scroller">
                {cards}
                <GalleryCard images={props.profile.Gallery}/>
            </div>
        </>
    );
}