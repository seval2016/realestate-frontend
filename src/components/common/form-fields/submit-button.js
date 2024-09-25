"use client";
import React from "react";
import { Button } from "react-bootstrap";


const SubmitButton = ({
	title,
	icon,
	...rest
}) => {
	

	return (
		<Button type="submit"  size="lg" {...rest}>
			{icon && <i className={`pi pi-${icon}`}></i>}  
			{title}
		</Button>
	);
};

export default SubmitButton;

