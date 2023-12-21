import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import Home from "pages/home/Index";
import Dashboard from "pages/admin/Dashboard";
import { ThemeProvider } from "@mui/material";
import customMuiTheme from "./muiTheme";
import TalentList from "pages/admin/Talent/Index";
import TagList from "pages/admin/Tag/Index";
import Login from "pages/admin/Login";

function AdminRoute({children: Children}: React.PropsWithChildren) {
    let token = localStorage.getItem("authToken");

    if (!token) {
        return <Navigate to="/admin/login" />;
    }
    return Children;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [],
    },
    {
        path: "/admin",
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "dashboard",
                element: <AdminRoute><Dashboard /></AdminRoute>,
            },
            {
                path: "talents",
                element: <AdminRoute><TalentList/></AdminRoute>,
            },
            {
                path: "tags",
                element: <AdminRoute><TagList /></AdminRoute>,
            },
        ],
    },
]);
function App() {
    return (
        <ThemeProvider theme={customMuiTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
