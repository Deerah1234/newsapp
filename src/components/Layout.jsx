import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="app-container">
            <header>
                <Link to=".">NewsApp</Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
