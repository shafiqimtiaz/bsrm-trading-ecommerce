import Layout from "../Layout";

import { useState } from "react";

const Home = () => {
	const [count, setCount] = useState(0);

	return (
		<Layout title="Home Page" className="container-fluid">
			<h1>I am homepage</h1>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 10)}>Click me</button>
		</Layout>
	);
};

export default Home;
