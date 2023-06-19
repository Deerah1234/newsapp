import "./App.css";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import NewsDetail from "./pages/NewsDetail";
import News, { loader as newsLoader } from "./pages/News";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" loader={newsLoader} element={<News />} />
            <Route
                path="news/:id"
                loader={newsLoader}
                element={<NewsDetail />}
            />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
