import Home from "./views/Home";
import AllTour from "./views/AllTour";
import _404 from "./views/404";
import About from "./views/About";
import Contact from "./views/Contact";
import Login from "./views/Login";
import Register from "./views/Register";
import CompLogin from "./views/company/Login";
import CompRegister from "./views/company/Register";
import SingleTour from "./views/SingleTour";
import AfterTour from "./views/AfterTour";
import Payment from "./views/Payment";
import Details from "./views/Details";
import PaymentSucessfull from "./views/PaymentSucessfull";
import Company from "./views/Company";
import History from "./views/History";
import HistoryDetail from "./views/HistoryDetail";
import PaymentFailed from "./views/PaymentFailed";
import Settings from "./views/Settings";
import Dashboard from "./views/company/Dashboard";
import Tours from "./views/company/Tours";
import ViewTour from "./views/company/ViewTour";
import Packages from "./views/company/Packages";
import ClientDetail from "./views/company/ClientDetail";
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
		path: "/user",
		text: "Login",
		component: Login,
		menu: false,
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
		path: "/user/settings",
		text: "Settings",
		component: Settings,
		menu: false,
	},
	{
		path: "/user/history/detail",
		text: "History",
		component: HistoryDetail,
		menu: false,
	},
	{
		path: "/tour/package/:id",
		text: "Single Tour",
		component: SingleTour,
		menu: false,
	},
	{
		path: "/tour/package/booking/detail",
		text: "Detail",
		component: Details,
		menu: false,
	},
	{
		path: "/tour/package/booking/payment",
		text: "Payment",
		component: Payment,
		menu: false,
	},
	{
		path: "/tour/package/:id/review",
		text: "Feedback",
		component: AfterTour,
		menu: false,
	},
	{
		path: "/tour/package/payment/successfull",
		text: "Payment Sucessfull",
		component: PaymentSucessfull,
		menu: false,
	},
	{
		path: "/tour/package/payment/failed",
		text: "Payment Failed",
		component: PaymentFailed,
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
		component: CompLogin,
		menu: false,
		type: "company",
	},
	{
		path: "/company/login",
		text: "Login",
		component: CompLogin,
		menu: false,
		type: "company",
	},
	{
		path: "/company/register",
		text: "Register",
		component: CompRegister,
		menu: false,
		type: "company",
	},
	{
		path: "/company/dashboard",
		text: "Dashboard",
		component: Dashboard,
		menu: true,
		type: "company",
	},
	{
		path: "/company/tours",
		text: "tours",
		component: Tours,
		menu: true,
		type: "company",
	},
	{
		path: "/company/tour/packages",
		text: "tours",
		component: Packages,
		menu: false,
		type: "company",
	},
	{
		path: "/company/tour/package/detail",
		text: "tours",
		component: ViewTour,
		menu: false,
		type: "company",
	},
	{
		path: "/company/tour/package/detail/client",
		text: "tours",
		component: ClientDetail,
		menu: false,
		type: "company",
	},
	{
		path: "/404",
		text: "404",
		component: _404,
		menu: false,
	},
];

export default routes;
