// import { useState, useEffect } from "react";
import fallbackImage from "../assets/nasa-unsplash.jpg";
import CategoryIcon from "@mui/icons-material/Category";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import TodayIcon from "@mui/icons-material/Today";
import { useLoaderData, Link } from "react-router-dom";
import { getNews } from "../utils/api";

export function loader() {
    return getNews();
}

const News = () => {
    const newsData = useLoaderData();

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

    const newsDataElement = newsData.map((article, index) => (
        <section key={index} className="news-section">
            <figure className="news-img">
                {article.urlToImage ? (
                    <>
                        <img src={article.urlToImage} alt="" className="img" />
                        <figcaption>form @{article.source.name}</figcaption>
                    </>
                ) : (
                    <>
                        <img src={fallbackImage} alt="" className="img" />
                        <figcaption>form unsplash-@Nasa</figcaption>
                    </>
                )}
            </figure>
            <section className="news-details" key={index}>
                <div className="location">
                    <CategoryIcon />
                    <h4>TECHNOLOGY</h4>
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        View on {article.source.name}
                    </a>
                </div>
                <h1>{article.title}</h1>
                <div className="publish-date">
                    {article.publishedAt && (
                        <section>
                            <h5 className="date">
                                <TodayIcon />
                                {formatDate(article.publishedAt)}
                            </h5>
                            <h5 className="time">
                                {" - "}
                                <AccessTimeFilledIcon />
                                {formatTime(article.publishedAt)}
                                {" UTC "}
                            </h5>
                        </section>
                    )}
                </div>
                <p className="news-description">{article.description}</p>
                <Link className="news-story" to={`news/${index}`}>
                    <VisibilityOffIcon />
                    Click to view full story
                </Link>
            </section>
        </section>
    ));

    return <div>{newsDataElement}</div>;
};

export default News;
