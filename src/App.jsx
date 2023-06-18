import "./App.css";
import { useState, useEffect } from "react";
// import image from "./assets/4K Wallpaper.jpg";
import locationIcon from "./assets/locationIcon.png";

function App() {
    const [newsData, setNewsData] = useState([]);
    const apiUrl =
        "https://gnews.io/api/v4/search?q=technology&lang=en&max=10&apikey=";
    const apiKey = "f9442b6ce8092c601193f0eda3b8c24d";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiUrl + apiKey);
            const data = await response.json();
            setNewsData([...data.articles]);
        };

        fetchData();
    }, []);

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
        <section className="news-section" key={index}>
            <figure className="news-img">
                <img src={article.image} alt="" className="img" />
                <figcaption>form {article.source.name}</figcaption>
            </figure>
            <section className="news-details" key={index}>
                <div className="location">
                    <img src={locationIcon} alt="" />
                    <h4>NIGERIA</h4>
                    <a
                        href={article.source.url}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        View on {article.source.name}
                    </a>
                </div>
                <h1>{article.title}</h1>
                <div className="publish-date">
                    {article.publishedAt && (
                        <>
                            <h5>{formatDate(article.publishedAt)}</h5>
                            <h5> - {formatTime(article.publishedAt)}</h5>
                        </>
                    )}
                </div>
                <p>{article.description}</p>
            </section>
        </section>
    ));

    return (
        <div className="app-container">
            <header>
                <h1>NewsApp</h1>
            </header>
            <main>{newsDataElement}</main>
        </div>
    );
}

export default App;
