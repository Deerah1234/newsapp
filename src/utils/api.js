export async function getNews() {
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&category=technology&max=10&apiKey=`;

    const apiKey = "cbcda5c90da24fa09c59e11cec3010a2";

    const res = await fetch(apiUrl + apiKey);
    if (!res.ok) {
        throw {
            message: "Failed to fetch News",
            statusText: res.statusText,
            status: res.status,
        };
    }
    const data = await res.json();
    return [...data.articles];
}
