import { types } from '../types/types';
const initialState = {
	uid: null,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.login:
			return {
				...state,
				uid: action.payload.uid,
			};

		case types.logout:
			return {
				uid: null
			};

		default:
			return state;
	}
};
