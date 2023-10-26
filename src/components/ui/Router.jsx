import { createBrowserRouter } from "react-router-dom"
import Home from '../screens/home/home'
import UserDetail from "../screens/home/users/user-detail/UserDetail"

const Router = createBrowserRouter([
	{
		path: "/",
		element: < Home />,
	},
	{
		path: "/user/:id",
		element: <UserDetail />,
	},
	{
		path: "*",
		element: <div>Page not found...</div>,
	}
])


export default Router