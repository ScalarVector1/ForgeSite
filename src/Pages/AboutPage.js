import InfoTag from "../Components/InfoTag";
import "./BioPage.css";
import BioCard from "../Components/BioCard";
import GalleryCard from "../Components/GalleryCard";
import { useNavigate, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

export default function AboutPage(props) {

    return (
        <>
            <div className="Scroller">
                <BioCard title="About" body="../../markdown/about.md"/>
            </div>
        </>
    );
}