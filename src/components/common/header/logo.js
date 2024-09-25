import React from "react";
import { NavbarBrand } from "react-bootstrap";
import { Link } from "next/navigation";
import Image from "next/image";


const Logo = ({ theme = "dark" }) => {
	return (
		<NavbarBrand href="/" as={Link}>
			<Image
				src={`/img/logos/logo-${theme}.png`}
				//alt={config.project.name}
				alt="logo"
				width={200}
				height={57}
				priority
			/>
		</NavbarBrand>
	);
};

export default Logo;