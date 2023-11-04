import { createBrowserRouter } from "react-router-dom"
import Home from '../screens/home/Home'
import UserDetail from "../screens/home/users/user-detail/UserDetail"
import NotFound from '../screens/404/NotFound'

const Router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/user/:id",
		element: <UserDetail />,
	},
	{
		path: "*",
		element: <NotFound />,
	},

])


export default Router