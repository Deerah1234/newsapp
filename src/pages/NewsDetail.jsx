import { useLoaderData, Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TodayIcon from "@mui/icons-material/Today";
import CategoryIcon from "@mui/icons-material/Category";
import Button from "@mui/material/Button";
import fallbackImage from "../assets/nasa-unsplash.jpg";
import { getNews } from "../utils/api";

export function loader({ params }) {
    return getNews(params.id);
}

const NewsDetail = () => {
    const data = useLoaderData();

    const formatDate = (time) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const formattedDate = new Date(time).toLocaleDateString(
            "en-US",
            options
        );
        return formattedDate;
    };

    const formatTime = (time) => {
        const formattedTime = time.split("T")[1].replace("Z", "");
        return formattedTime;
    };

    return (
        <div className="news-detail-container">
            <Button
                variant="outlined"
                className="animate__animated animate__fadeInLeft"
            >
                <Link
                    to=".."
                    className="back-button animate__animated animate__fadeInLeft"
                >
                    <ArrowBackIcon />
                    <span>Back to all News</span>
                </Link>
            </Button>
            <div className="news-detail-location animate__animated animate__fadeInLeft ">
                <CategoryIcon />
                <h4>TECHNOLOGY</h4>
            </div>
            <div className="news-title animate__animated animate__fadeInLeft">
                {data.title}
            </div>
            <div className="news-date animate__animated animate__fadeInLeft">
                {data.publishedAt && (
                    <section>
                        <h5 className="date">
                            <TodayIcon />
                            {formatDate(data.publishedAt)}
                        </h5>
                        <h5 className="time">
                            {" - "}
                            <AccessTimeFilledIcon />
                            {formatTime(data.publishedAt)}
                            {" UTC "}
                        </h5>
                    </section>
                )}
            </div>
            <figure className="news-img-container animate__animated animate__fadeInLeft">
                {data.urlToImage ? (
                    <>
                        <img
                            src={data.urlToImage}
                            alt=""
                            className="news-detail-img"
                        />
                        <figcaption>Source: {data.source.name}</figcaption>
                    </>
                ) : (
                    <>
                        <img
                            src={fallbackImage}
                            alt=""
                            className="news-detail-img"
                        />
                        <figcaption>Source: unsplash-@Nasa</figcaption>
                    </>
                )}
            </figure>
            {data.source.name === "YouTube" ? (
                <p className="news-detail-content animate__animated animate__fadeInLeft">
                    <a
                        href={data.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Go to YouTube
                    </a>
                </p>
            ) : (
                <>
                    <p className="news-detail-content animate__animated animate__fadeInLeft">
                        {data.content.slice(0, -14)}...
                    </p>
                    <p className="news-detail-content animate__animated animate__fadeInLeft">
                        Read More:{" "}
                        <a
                            href={data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Go to {data.source.name}
                        </a>
                    </p>
                </>
            )}
        </div>
    );
};

export default NewsDetail;
