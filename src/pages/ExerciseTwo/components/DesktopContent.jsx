// HTML Parser
import parse from "html-react-parser";

const DesktopContent = ({ id, data }) => {
	return (
		<div className="tab-content">
			{parse(data[id].content)}
			{/* Parse parses html tag on JSON File */}
		</div>
	);
};

export default DesktopContent;
