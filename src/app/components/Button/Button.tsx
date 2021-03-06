import React, { forwardRef } from 'react';
import classNames from 'classnames';


export enum ButtonStyle {
	GREEN = 'green',
	RED = 'red',
	BLUE = 'blue'
}

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string; }>;
	color?: ButtonStyle;
	noPreventDefault?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButton>(
	({ text, Icon, color = ButtonStyle.GREEN, noPreventDefault, className, ...rest }, ref) => (
		<button
			{...rest}
			ref={ref}
			onClick={e => {
				if (!noPreventDefault && rest.type !== "submit")
					e.preventDefault();

				if (rest.onClick)
					rest.onClick(e);
			}}
			className={classNames("button", className, color)}
			aria-label={text ?? "icon button"}
		>
			{text && <span>{text}</span>}
			{Icon && <Icon />}
		</button>
	));

export default Button;