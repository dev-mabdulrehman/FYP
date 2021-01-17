import Home from "./views/Home";
import AllTour from "./views/AllTour";
import _404 from "./views/404";
import About from "./views/About";
import Contact from "./views/Contact";
import Login from "./views/Login";
import Register from "./views/Register";
import SingleTour from "./views/SingleTour";
import AfterTour from "./views/AfterTour";
import Payment from "./views/Payment";
import Details from "./views/Details";
import PaymentSucessfull from "./views/PaymentSucessfull";
import Company from "./views/Company";
import History from "./views/History";
import HistoryDetail from "./views/HistoryDetail";
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
		path: "/user/history",
		text: "History",
		component: History,
		menu: false,
	},
	{
		path: "/user/history/detail/",
		text: "History",
		component: HistoryDetail,
		menu: false,
	},
	{
		path: "/tour/single/:id",
		text: "Single Tour",
		component: SingleTour,
		menu: false,
	},
	{
		path: "/tour/single/:id/detail",
		text: "Detail",
		component: Details,
		menu: false,
	},
	{
		path: "/tour/single/:id/payment",
		text: "Payment",
		component: Payment,
		menu: false,
	},
	{
		path: "/tour/single/:id/review",
		text: "Feedback",
		component: AfterTour,
		menu: false,
	},
	{
		path: "/tour/single/:id/payment/successfull",
		text: "Payment Sucessfull",
		component: PaymentSucessfull,
		menu: false,
	},
	{
		path: "/company/home",
		text: "Company",
		component: Company,
		menu: false,
	},

	{
		path: "/company",
		text: "Login",
		component: Login,
		menu: false,
	},
	{
		path: "/company/login",
		text: "Login",
		component: Login,
		menu: false,
	},
	{
		path: "/company/dashboard",
		text: "Dashboard",
		component: Login,
		menu: false,
	},
	{
		path: "/company/register",
		text: "Register",
		component: Register,
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
