import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NewsDetail = () => {
    return (
        <div>
            <Link to=".." className="back-button">
                <ArrowBackIcon /> 
                <span>Back to all vans</span>
            </Link>
            NewsDetail
        </div>
    );
};

export default NewsDetail;
