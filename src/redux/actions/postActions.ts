import axios from 'axios';
import { Post } from '../../types/types';
import { API_URL } from '../../utils/apiURL';
import {
	FETCH_POSTS_FAILURE,
	FETCH_POSTS_STARTED,
	FETCH_POSTS_SUCCESS,
	FETCH_POST_FAILURE,
	FETCH_POST_STARTED,
	FETCH_POST_SUCCESS,
} from './postActionsTypes';

const fetchPostsStarts = () => {
	return {
		type: FETCH_POSTS_STARTED,
	};
};

const fetchPostsSuccess = (posts: Post[]) => {
	return {
		type: FETCH_POSTS_SUCCESS,
		payload: posts,
	};
};

const fetchPostsFailure = (error: any) => {
	return {
		type: FETCH_POSTS_FAILURE,
		payload: error,
	};
};

// fetch posts
export const fetchPostsAction = () => {
	return async (dispatch) => {
		dispatch(fetchPostsStarts());
		try {
			const response = await axios.get(API_URL);
			dispatch(fetchPostsSuccess(response.data));
		} catch (error) {
			dispatch(fetchPostsFailure(error));
		}
	};
};

const fetchPostStarts = () => {
	return {
		type: FETCH_POST_STARTED,
	};
};

const fetchPostSuccess = (post: Post) => {
	return {
		type: FETCH_POST_SUCCESS,
		payload: [post],
	};
};
const fetchPostFailure = (error: any) => {
	return {
		type: FETCH_POST_FAILURE,
		payload: error,
	};
};

// fetch single post
export const fetchPostAction = (id: string) => {
	return async (dispatch) => {
		dispatch(fetchPostStarts());
		try {
			const response = await axios.get(`${API_URL}/${id}`);
			dispatch(fetchPostSuccess(response.data));
		} catch (error) {
			dispatch(fetchPostFailure(error));
		}
	};
};
