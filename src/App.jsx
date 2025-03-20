import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage';
import ToastProvider from "./components/ToastProvider";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import LayoutWrapper from "./Wrappers/LayoutWrapper";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import DashboardWrapper from "./Wrappers/DashboardWrapper";
import authLoader from "./loaders/unit/authLoader";
import Logout from "./components/Logout";
import AdminWrapper from "./Wrappers/AdminWrapper";
import UserDashboard from "./Pages/user/UserDashboard";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import UserFeed from "./Pages/user/UserFeed";
import CreatePost from "./Pages/user/CreatePost";
import userFeedLoader from "./loaders/combined/userFeedLoader";
import ConfirmationDialog from "./components/ConfirmationDialog";
import ProfilePage from "./Pages/user/ProfilePage";

const routes = [
  {
    path: "/",
    element: <LayoutWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <UserDashboard />
      },
      {
        path: "logout",
        element: <Logout />,
        hydrateFallbackElement: <p>Please wait...</p>
      },
      {
        path: "feed",
        element: <UserFeed />,
        hydrateFallbackElement: <p>Loading Feed...</p>,
        loader: userFeedLoader
      },
      {
        path: "create-post",
        element: <CreatePost />
      },
      {
        path: "profile",
        element: <ProfilePage />,
        loader: authLoader,
        hydrateFallbackElement: <p>Loading profile...</p>
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <AdminWrapper />,
    loader: authLoader,
    hydrateFallbackElement: <p>Loading admin...</p>,
    children: [
      {
        path: "",
        element: <AdminDashboard />
      },
      {
        path: "logout",
        element: <Logout />,
        hydrateFallbackElement: <p>Please wait...</p>
      },
      {
        path: "profile",
        element: <ProfilePage />,
        loader: authLoader,
        hydrateFallbackElement: <p>Loading profile...</p>
      }
    ]
  }
];

const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  }
})

const App = () => {
  return <>
    <Provider store={store}>
      <ToastProvider />
      <ConfirmationDialog />
      <RouterProvider router={router} />
    </Provider>
  </>
}

export default App;