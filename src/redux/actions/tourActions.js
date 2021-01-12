import {
	FETCH_TOUR_REQUEST,
	FETCH_TOUR_SUCESS,
	FETCH_TOUR_FAILED,
} from "./types";
import axios from "axios";

function fetchTourRequest() {
	return {
		type: FETCH_TOUR_REQUEST,
	};
}

function fetchTourSucess(tours) {
	return {
		type: FETCH_TOUR_SUCESS,
		payload: tours,
	};
}

function fetchTourFailed(err) {
	return {
		type: FETCH_TOUR_FAILED,
		payload: err,
	};
}

export function fetchTour(type, limit) {
	return function (dispatch) {
		dispatch(fetchTourRequest());
		axios
			.get(`http://localhost:5000/tour/${type}/${limit}`)
			.then(res => {
				console.log(res.data);
				dispatch(fetchTourSucess(res));
			})
			.catch(err => {
				console.log(err);
				dispatch(fetchTourFailed(err));
			});
	};
}
