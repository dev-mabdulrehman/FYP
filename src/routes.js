import Home from "./views/Home";
import AllTour from "./views/AllTour";
import _404 from "./views/404";
import About from "./views/About";
import Contact from "./views/Contact";
import Login from "./views/Login";
import Register from "./views/Register";
import SingleTour from "./views/SingleTour";
const routes = [
	{
		path: "/",
		text: "Home",
		component: Home,
		menu: true,
	},
	{
		path: "/about",
		text: "About",
		component: About,
		menu: true,
	},

	{
		path: "/contact",
		text: "Contact",
		component: Contact,
		menu: true,
	},
	{
		path: "/tour/:type",
		text: "Tour",
		component: AllTour,
		menu: false,
	},

	{
		path: "/tour/all",
		text: "Tour",
		component: AllTour,
		menu: true,
	},
	{
		path: "/user/login",
		text: "Login",
		component: Login,
		menu: false,
	},
	{
		path: "/user/register",
		text: "Register",
		component: Register,
		menu: false,
	},
	{
		path: "/tour/single/:single",
		text: "",
		component: SingleTour,
		menu: false,
	},
	{
		path: "/404",
		text: "404",
		component: _404,
		menu: false,
	},
];

export default routes;
