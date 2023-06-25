export async function getNews(id) {
    const apiKey = "f9442b6ce8092c601193f0eda3b8c24d";
    const apiUrl = ` https://gnews.io/api/v4/search?q=example&lang=en&country=ng&max=10&apikey=${apiKey}`;


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
