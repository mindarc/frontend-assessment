import React, { FC } from "react";

interface Props {
	image: string;
	text: string;
}

export const Card: FC<Props> = ({ image, text }) => {
	return (
		<div className="border text-center relative w-full pb-[70px] p-[22px] rounded-[5px] border-solid border-[rgb(220,220,220)]">
			<img
				src={image}
				alt="Exercise One Item"
				className="w-full inline-block rounded-[5px] mb-4"
			/>
			<p className="leading-7 mb-[22px]">{text}</p>
			<a
				href="/"
				className="uppercase tracking-[2px] no-underline text-black font-bold absolute -translate-x-2/4 whitespace-nowrap text-sm px-[15px] py-2.5 rounded-[30px] border-[3px] border-solid border-black left-2/4 bottom-[22px]"
			>
				Read More
			</a>
		</div>
	);
};
