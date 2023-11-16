import classNames from "classnames";
import { FC } from "react";
import parse from "html-react-parser";

interface Props {
	tabID: number;
	title: string;
	content: string;
	onClick: () => void;
	activeTab: number;
	accordionClickedItem: number | null;
}

export const Tab: FC<Props> = ({
	tabID,
	title,
	content,
	onClick,
	activeTab,
	accordionClickedItem,
}) => {
	return (
		<div
			className={classNames("tab", {
				"tab-active": activeTab === tabID,
				"tab-accordion-hide": activeTab !== accordionClickedItem,
			})}
			onClick={activeTab === tabID ? undefined : onClick}
		>
			<div className="tab-title">{title}</div>
			<div className="tab-content">
				<div className="tab-content-text">{parse(content)}</div>
			</div>
		</div>
	);
};
