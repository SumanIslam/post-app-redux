import React, { SyntheticEvent } from 'react';
import './form.css';

const SearchPost = ({
	search,
	setSearch,
}: {
	search: string;
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
	return (
		<div className='form-header'>
			<div>
				<h2>React Redux Project</h2>
				<p>
					This project is a simple React Redux project that fetches data with
					search functionality from an API
				</p>
			</div>
				<input
					placeholder='Search for a post'
					type='text'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
		</div>
	);
};

export default SearchPost;
