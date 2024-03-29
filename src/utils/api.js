export async function getNews(id) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&max=10&apiKey=${apiKey}`;

    const res = await fetch(apiUrl);
    if (!res.ok) {
        throw {
            message: "Failed to fetch News",
            statusText: res.statusText,
            status: res.status,
        };
    }
    const data = await res.json();
    return id ? data.articles[id] : data.articles;
}
