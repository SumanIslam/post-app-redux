import { store } from "../store/store";
import { PostReducerInitialState } from '../../types/types';

export const getAllPosts = () => {
  const data: PostReducerInitialState = store.getState();
  return data;
}