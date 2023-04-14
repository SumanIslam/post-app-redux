import React, { SyntheticEvent, useState } from "react";
import './form.css'

const SearchPost = () => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  }

  return (
		<div className='form-header'>
			<div>
				<h2>React Redux Project</h2>
				<p>
					This project is a simple React Redux project that fetches data with
					search functionality from an API
				</p>
			</div>
			<form onSubmit={handleSubmit}>
				<input
					placeholder='Search for a post'
					type='text'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<button type='submit'>Search</button>
			</form>
		</div>
	);
}

export default SearchPost;