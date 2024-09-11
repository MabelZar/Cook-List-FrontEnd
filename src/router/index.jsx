import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignInPage from "../pages/SignInPage";
import PrivateRoute from "./PrivateRoutes";
import MealProgramPage from "../pages/MealProgramPage";
import MealPage from "../pages/MealPage";

export const router = createBrowserRouter([
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signin",
    element: <SignInPage />,
  },
  {
    path: "program",
    element: (
      <PrivateRoute>
        <MealProgramPage />
      </PrivateRoute>
    ),
  },
  {
    path: "meal",
    element: (
      <PrivateRoute>
        <MealPage />
      </PrivateRoute>
    ),
  },
]);
