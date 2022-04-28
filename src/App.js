import { useState } from "react";
import "./App.css";

function App() {
	var change = true;
	var arr = new Array(64).fill().map((v, i) => i);
	const [clicked, setClicked] = useState(null);

	return (
		<div className="container">
			{arr.map((i) => {
				change = i % 8 == 0 ? !change : change;
				return (
					<div
						onClick={() => {
							setClicked(i);
						}}
						className={`
						    block
							${
								clicked === i
									? "red"
									: change
									? i % 2 == 0
										? "white"
										: "black"
									: i % 2 == 0
									? "black"
									: "white"
							}
								`}
					/>
				);
			})}
		</div>
	);
}

export default App;
