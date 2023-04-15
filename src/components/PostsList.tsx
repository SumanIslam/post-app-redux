import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {
	fetchPostAction,
	fetchPostsAction,
} from '../redux/actions/postActions';
import { getAllPosts } from '../redux/selectors/getAllPosts';
import SearchPost from './SearchPost';
import './posts.css';

const PostList = () => {
	const [search, setSearch] = useState<string>('');
  

	const dispatch = useDispatch();
	useEffect(() => {
		if (search) {
			dispatch(fetchPostAction(search));
		} else {
			dispatch(fetchPostsAction());
		}
	}, [search]);

	const { loading, error, posts } = useSelector(getAllPosts);

	return (
		<>
			<SearchPost search={search} setSearch={setSearch} />
			<div className='posts-list'>
				<h1>Total Posts {posts.length}</h1>
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h2 style={{ color: 'red' }}>
						{error.response.status === 404 && 'No post found'}
					</h2>
				) : (
					posts.map((post) => (
						<div key={post.id} className='post-details'>
							<h3>{post.title}</h3>
							<p>{post.body}</p>
						</div>
					))
				)}
			</div>
		</>
	);
};

export default PostList;