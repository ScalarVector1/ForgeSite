import InfoTag from "../Components/InfoTag";
import "./BioPage.css";
import BioCard from "../Components/BioCard";
import GalleryCard from "../Components/GalleryCard";
import { useNavigate, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

export default function BioPage(props) {

    const {key} = useParams();
    const navigate = useNavigate();

    var profile;
    try{
        profile = require(`../Profiles/${key}.json`);
    } catch{
        profile = require(`../Profiles/sample.json`);
    }

    const tags = [];
    for(const index in profile.Tags) {
        const tag = profile.Tags[index];
        tags.push(<InfoTag icon={tag.Image} text={tag.Text} key={index}/>)
    }

    const cards = [];
    for(const index in profile.Cards) {
        const card = profile.Cards[index];
        cards.push(<BioCard title={card.Title} body={card.Body} index={index} key={index}/>)
    }

    return (
        <>
            <div className="Topbar">

                <img className="TopImage" src={profile.MainImage}/>

                <div className="TopBanner">                   
                    <h1 className="TopName">{profile.Name}</h1>
                </div>

                <GoArrowLeft className="BackButton" onClick={() => navigate("/")}/>

                <div className="Tagbox">
                    {tags}
                </div>

            </div>

            <div className="Scroller">
                {cards}
                {profile.Gallery ? <GalleryCard images={profile.Gallery}/> : <></>}
            </div>
        </>
    );
}