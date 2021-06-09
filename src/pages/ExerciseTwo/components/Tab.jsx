// For active tab
import classNames from "classnames";

// HTML Parser
import parse from "html-react-parser";

const Tab = ({
	tabID,
	title,
	content,
	onClick,
	activeTab,
	accordionClickedItem,
}) => {
	return (
		<div
			className={classNames("tab-item", {
				"tab-item-active": activeTab === tabID,
				"tab-item-accordion-hide": activeTab !== accordionClickedItem, // Hide accordion if accordion is active on click
			})}
			onClick={onClick}
		>
			<div className="tab-item-title">{title}</div>
			<div className="tab-item-content">
				<div class="tab-item-content-text">{parse(content)}</div>
				{/* Parse parses html tag on JSON File */}
			</div>
		</div>
	);
};

export default Tab;
