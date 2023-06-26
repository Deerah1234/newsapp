import "./App.css";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import NewsDetail, { loader as newsDetailLoader } from "./pages/NewsDetail";
import NotFound from "./pages/Notfound";
import News, { loader as newsLoader } from "./pages/News";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route
                path="/"
                loader={newsLoader}
                errorElement={<Error />}
                element={<News />}
            />
            <Route
                path="news/:id"
                loader={newsDetailLoader}
                element={<NewsDetail />}
            />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
