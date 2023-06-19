export async function getNews() {
    // const apiUrl =
    //     "https://gnews.io/api/v4/search?q=technology&lang=en&max=10&apikey=";
    const apiUrl =
        "https://newsapi.org/v2/top-headlines?country=us&category=technology&max=10&apiKey=";
    // const apiKey = "f9442b6ce8092c601193f0eda3b8c24d";
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
