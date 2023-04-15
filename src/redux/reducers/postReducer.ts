import { PostReducerInitialState, reduxAction } from '../../types/types';

import {
	FETCH_POSTS_FAILURE,
	FETCH_POSTS_STARTED,
	FETCH_POSTS_SUCCESS,
	FETCH_POST_FAILURE,
	FETCH_POST_STARTED,
	FETCH_POST_SUCCESS,
} from '../actions/postActionsTypes';

// initial state
const initialState: PostReducerInitialState = {
	loading: false,
	error: '',
	posts: [],
};

export const postReducer = (state = initialState, action: reduxAction) => {
	switch (action.type) {
		case FETCH_POSTS_STARTED:
			return {
				...state,
				loading: true,
			};
		case FETCH_POSTS_SUCCESS:
			return {
				...state,
				loading: false,
				posts: action.payload,
				error: '',
			};
		case FETCH_POSTS_FAILURE:
			return {
				...state,
				posts: [],
				loading: false,
				error: action.payload,
			};
		case FETCH_POST_STARTED:
			return {
				...state,
				loading: true,
			};
		case FETCH_POST_SUCCESS:
			return {
				...state,
				posts: action.payload,
				error: '',
				loading: false,
			};
		case FETCH_POST_FAILURE:
			return {
				...state,
				posts: [],
				Error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
