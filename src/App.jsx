import "./App.css";
import { useState, useEffect } from "react";
import image from "./assets/4K Wallpaper.jpg";
import locationIcon from "./assets/locationIcon.png";

function App() {
    const [newsData, setNewsData] = useState([]);
    const apiUrl =
        "https://gnews.io/api/v4/search?q=technology&lang=en&max=10&apikey=f9442b6ce8092c601193f0eda3b8c24d";
    // const apiKey = "f9442b6ce8092c601193f0eda3b8c24d";

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setNewsData([...data.articles]);
        };

        fetchData();
    }, []);

    const newsDataElement = newsData.map((article, index) => (
        <section className="news-section">
            <div className="news-img">
                <img src={image} alt="" className="img" />
            </div>
            <div className="news-details" key={index}>
                <div className="location">
                    <img src={locationIcon} alt="" />
                    <h4>NIGERIA</h4>
                    <a href="google.com">View on Source</a>
                </div>
                <h1>{article.title}</h1>
                <div className="publish-date">
                    <h5>12 Jan, 2021 - 24 Jan, 2021</h5>
                    <h5>10:20amWAT</h5>
                </div>
                <p>
                    Mount Fuji is the tallest mountain in Japan, standing at
                    3,776 meters (12,380 feet). Mount Fuji is the single most
                    popular tourist site in Japan, for both Japanese and foreign
                    tourists.
                </p>
            </div>
        </section>
    ));

    return (
        <div className="app-container">
            <header className="header">
                <h1>NewsApp</h1>
            </header>
            {newsDataElement}
        </div>
    );
}

export default App;
