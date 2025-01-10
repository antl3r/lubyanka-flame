import React, { InstanceProps } from "@rbxts/react";
import { FigmaProps } from "client/types/types.uitypes";
import { Figma } from "client/util/util.ui";

function FigmaFrame(props: FigmaProps<Frame>) {
	const { autoLayout, children, pad, rbx, size } = props;

	return (
		<frame
			key={"FigmaFrame"}
			{...rbx}
			{...(size && Figma.size(...size))}
			BorderSizePixel={0}
			BackgroundTransparency={1}
		>
			{autoLayout && Figma.createAutoLayout(...autoLayout)}
			{pad && Figma.createPad(...pad)}
			{children}
		</frame>
	);
}

export default FigmaFrame;
