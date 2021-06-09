// React Hooks
import { useState } from "react";

// SASS
import "./ExerciseTwo.scss";

// Components
import Tab from "./components/Tab";
import DesktopContent from "./components/DesktopContent";

// JSON Data
import data from "./data/data.json";

const ExerciseTwo = () => {
	const [desktopTabContent, setDesktopTabContent] = useState(0);
	const [accordionClickedItem, setAccordionClickedItem] = useState(0); // This state checks which accordion is active

	const tabClickHandler = (index) => {
		// Set active tab and accordion
		setDesktopTabContent(index);

		// If item to be clicked is the active accordion, empty accordionClickedItem state so accordion is active
		if (index === accordionClickedItem) {
			setAccordionClickedItem(null);
		} else {
			setAccordionClickedItem(index);
		}
	};

	return (
		<div className="exercise-two">
			<div className="tabs">
				<div className="tabs-header">
					{data.map((data, index) => {
						return (
							<Tab
								key={index}
								tabID={index}
								title={data.title}
								content={data.content}
								onClick={() => tabClickHandler(index)}
								activeTab={desktopTabContent}
								accordionClickedItem={accordionClickedItem}
							/>
						);
					})}
				</div>
				{/* Shows content on desktop */}
				<DesktopContent id={desktopTabContent} data={data} />
			</div>
		</div>
	);
};

export default ExerciseTwo;
