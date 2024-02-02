import InfoTag from "../Components/InfoTag";
import "./BioPage.css";
import BioCard from "../Components/BioCard";
import GalleryCard from "../Components/GalleryCard";
import { useNavigate, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

export default function AboutPage(props) {

    const navigate = useNavigate();

    return (
        <>
            <div className="Buttons">
                <div className="Button" onClick={() => navigate("/")}>
                    <GoArrowLeft style={{display:"block", width: "30px", height: "40px"}}/>
                    Back to roster
                </div>
            </div>

            <div className="Scroller" style={{top: "80px"}}>
                <BioCard title="About" body="../../markdown/about.md"/>
            </div>
        </>
    );
}