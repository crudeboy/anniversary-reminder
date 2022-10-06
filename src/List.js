import React from "react";

const List = ({ data }) => {
	if (!data) {
		return <h4>No Annivasary to display</h4>;
	}
	return (
		<>
			<div>
				{data.map((item) => (
					<div className="person ">
						<img className="" src={item.image} alt={item.name} />
						<div>
							<h4>{item.name}</h4>
							<p>{item.age} Years</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default List;
