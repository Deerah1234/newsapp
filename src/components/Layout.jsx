import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="app-container">
            <header>
                <h1>NewsApp</h1>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
