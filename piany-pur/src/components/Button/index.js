import React from 'react'
import styles from './Button.module.css'

const STYLES = ['btn--primary', 'btn--secondary', 'btn--tertiary', 'btn--call-to-action', 'btn--cancel', 'btn--outline', 'btn--neu', 'btn--initial', 'btn--initial--pressed', 'btn--semitransparent'];
const SIZES = ['btn--medium', 'btn--large', 'btn--medium--round', 'btn--long', 'btn--small'];


const Button = ({
	children,
	type,
	onClick,
	style,
	size }) => {
	const checkButtonStyle = STYLES.includes(style) ? style : STYLES[0];
	const checkButtonSize = SIZES.includes(size) ? size : SIZES[0];

	return (
		<button
			onClick={onClick}
			type={type}
			className={[styles['btn'],styles[size],styles[style]].join(" ")}
		>
			{children}
		</button>
	)
};
export default Button;