import { Navigate, Outlet, useLoaderData } from "react-router";
import NavBar from "../Components/NavBar";

const LayoutWrapper = () => {

    const user = useLoaderData();

    if (user) {
        return <Navigate to="/dashboard" />
    }

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default LayoutWrapper;