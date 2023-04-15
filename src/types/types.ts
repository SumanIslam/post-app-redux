export interface PostReducerInitialState {
  loading: boolean;
  error: any;
  posts: Post[];
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface reduxAction {
  type: string;
  payload?: any;
}