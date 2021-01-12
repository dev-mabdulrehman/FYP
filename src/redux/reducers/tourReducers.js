import {
	FETCH_TOUR_REQUEST,
	FETCH_TOUR_SUCESS,
	FETCH_TOUR_FAILED,
} from "../actions/types";

const intialState = {
	loading: false,
	tours: [],
	response: "",
};

export function tourReducer(state = intialState, action) {
	switch (action.type) {
		case FETCH_TOUR_REQUEST:
			return {
				...state,
				loading: true,
				tours: [],
				response: "",
			};
		case FETCH_TOUR_SUCESS:
			return {
				...state,
				loading: false,
				tours: action.payload.data,
				response: "",
			};
		case FETCH_TOUR_FAILED:
			return {
				...state,
				loading: false,
				tours: [],
				response: action.payload,
			};
		default:
			return {
				...state,
			};
	}
}
