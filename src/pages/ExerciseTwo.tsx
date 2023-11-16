import { useState } from "react";
import { Tab } from "../ui/Tab";
import data from "../data/data.json";
import parse from "html-react-parser";

export const ExerciseTwo = () => {
	const [desktopTabContent, setDesktopTabContent] = useState(0);
	const [accordionClickedItem, setAccordionClickedItem] = useState<
		number | null
	>(0);

	const tabClickHandler = (index: number) => {
		setDesktopTabContent(index);

		if (index === accordionClickedItem) {
			setAccordionClickedItem(null);
		} else {
			setAccordionClickedItem(index);
		}
	};

	return (
		<div className="bg-amber-400 w-screen min-h-screen relative overflow-hidden pt-[10vh] pb-4 px-4 md:pt-[30vh] md:pb-4 md:px-4 exercise-two">
			<div className="w-full max-w-[800px] mx-auto my-0 tabs">
				<div className="md:flex tabs-header">
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
				<div className="tab-content-desktop">
					{parse(data[desktopTabContent].content)}
				</div>
			</div>
		</div>
	);
};
