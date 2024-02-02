import InfoTag from "../Components/InfoTag";
import "./BioPage.css";
import BioCard from "../Components/BioCard";
import GalleryCard from "../Components/GalleryCard";
import { useNavigate, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

export default function ContactPage(props) {

    return (
        <>
            <div className="Scroller">
                <BioCard title="Contacts" body="../../markdown/contact.md"/>
            </div>
        </>
    );
}