import React from "react";
import "./section-title.scss";

const SectionTitle = ({ title,type }) => {
	return <div className="section">
		<h3 className="section-title">{title}</h3>
		<div className="section-type">{type}</div>
	</div>
	
};

export default SectionTitle;