import FormLogin from "../form_login"
import { createBrowserRouter } from "react-router-dom"
import FormSignup from "../form_sigenup"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <FormLogin />
    },
    {
        path: "/signup",
        element: <FormSignup />
    }
])