import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
	const [dataVal, setDataVal] = useState(data);

	const handleDelete = () => {
		setDataVal([]);
	};

	let message = {
		data: `${dataVal.length} people have their anniversary today `,
		noData: `No anniversary today`,
	};

	return (
		<>
			<div className="container">
				{dataVal.length ? <h3>{message.data}</h3> : <h3>{message.noData}</h3>}
				<List data={dataVal} />
				<button onClick={handleDelete}>Clear All</button>
			</div>
		</>
	);
}

export default App;
